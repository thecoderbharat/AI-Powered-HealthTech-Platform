import { NextRequest, NextResponse } from "next/server";

// ─── Types ─────────────────────────────────────────────────────────────────
interface WaitlistPayload {
  fullName: string;
  email: string;
  healthGoal: string;
  city: string;
  wearable: "yes" | "no";
}

// ─── Runtime ───────────────────────────────────────────────────────────────
export const runtime = "nodejs";

// ─── Google Sheets Helper ──────────────────────────────────────────────────
// Uses Google Sheets API v4 with service account JWT auth
// No external npm package needed — pure fetch calls

async function getGoogleAccessToken(): Promise<string> {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL!;

  // Build JWT header + payload
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  // Base64url encode
  const base64url = (obj: object) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

  const signingInput = `${base64url(header)}.${base64url(payload)}`;

  // Sign with RSA-SHA256 using Node.js crypto
  const { createSign } = await import("crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(signingInput);
  const signature = sign
    .sign(privateKey, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  const jwt = `${signingInput}.${signature}`;

  // Exchange JWT for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const tokenData = (await tokenRes.json()) as { access_token: string };
  return tokenData.access_token;
}

async function appendToGoogleSheet(data: WaitlistPayload): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID!;
  const accessToken = await getGoogleAccessToken();

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "short",
    timeStyle: "short",
  });

  // Values match the column order: Timestamp, Full Name, Email, Health Goal, City, Wearable
  const values = [
    [
      timestamp,
      data.fullName,
      data.email,
      data.healthGoal,
      data.city,
      data.wearable === "yes" ? "Yes" : "No",
    ],
  ];

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google Sheets append failed: ${err}`);
  }
}

// ─── POST /api/waitlist ────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Parse + validate body
    const body = (await req.json()) as Partial<WaitlistPayload>;
    const { fullName, email, healthGoal, city, wearable } = body;

    if (!fullName || !email || !healthGoal || !city || !wearable) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const validPayload: WaitlistPayload = {
      fullName,
      email,
      healthGoal,
      city,
      wearable,
    };

    // 2. Check env vars
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL;
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

    // 3. Save to Google Sheets (if configured)
    if (GOOGLE_SHEET_ID && GOOGLE_CLIENT_EMAIL && GOOGLE_PRIVATE_KEY) {
      try {
        await appendToGoogleSheet(validPayload);
        console.log(`✅ Sheet: added ${email}`);
      } catch (sheetErr) {
        // Non-fatal — log but continue so email still sends
        console.error("Google Sheets error (non-fatal):", sheetErr);
      }
    } else {
      console.warn("Google Sheets env vars not set — skipping sheet save");
    }

    // 4. Send emails (if Resend configured)
    if (RESEND_API_KEY && OWNER_EMAIL) {
      const submittedAt = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      });

      const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Waitlist Signup — SvasthaX</title>
</head>
<body style="margin:0;padding:0;background:#070d1f;font-family:'Inter',Arial,sans-serif;color:#dfe4fe;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070d1f;padding:40px 20px;">
    <tr><td>
      <table width="600" align="center" cellpadding="0" cellspacing="0"
        style="background:#11192e;border-radius:24px;overflow:hidden;border:1px solid rgba(65,71,91,0.3);">
        <tr>
          <td style="background:linear-gradient(135deg,#83efe1 0%,#3fb1a5 100%);padding:32px 40px;">
            <h1 style="margin:0;font-size:24px;font-weight:900;color:#002824;">SvasthaX</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#004840;font-weight:600;">New Waitlist Signup Received</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 24px;font-size:15px;color:#a5aac2;line-height:1.6;">
              A new user has joined the SvasthaX waitlist. Details below:
            </p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ["👤 Full Name", fullName],
                ["📧 Email", email],
                ["🎯 Health Goal", healthGoal],
                ["📍 City", city],
                ["⌚ Uses Wearable", wearable === "yes" ? "Yes" : "No"],
                ["🕐 Submitted At", submittedAt],
              ]
                .map(
                  ([label, value]) => `
              <tr>
                <td style="padding:10px 14px;background:#0c1326;border-radius:8px;margin-bottom:6px;display:block;">
                  <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#6f758b;">${label}</span>
                  <br/>
                  <span style="font-size:15px;font-weight:600;color:#dfe4fe;margin-top:4px;display:block;">${value}</span>
                </td>
              </tr>
              <tr><td style="height:6px;"></td></tr>`
                )
                .join("")}
            </table>
            <div style="margin-top:28px;padding:16px;background:rgba(131,239,225,0.05);border-radius:10px;border:1px solid rgba(131,239,225,0.15);">
              <p style="margin:0;font-size:13px;color:#83efe1;line-height:1.6;">
                💡 This entry has also been saved to your <strong>SvasthaX Waitlist Google Sheet</strong>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px;border-top:1px solid rgba(65,71,91,0.3);">
            <p style="margin:0;font-size:12px;color:#41475b;text-align:center;">
              Sent automatically by SvasthaX &bull; Do not reply
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

      const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the SvasthaX Waitlist!</title>
</head>
<body style="margin:0;padding:0;background:#070d1f;font-family:'Inter',Arial,sans-serif;color:#dfe4fe;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070d1f;padding:40px 20px;">
    <tr><td>
      <table width="600" align="center" cellpadding="0" cellspacing="0"
        style="background:#11192e;border-radius:24px;overflow:hidden;border:1px solid rgba(65,71,91,0.3);">
        <tr>
          <td style="background:linear-gradient(135deg,#83efe1 0%,#3fb1a5 100%);padding:40px;text-align:center;">
            <h1 style="margin:0;font-size:28px;font-weight:900;color:#002824;">SvasthaX</h1>
            <p style="margin:8px 0 0;font-size:14px;color:#004840;font-weight:600;">Clinical-Grade Preventive AI</p>
          </td>
        </tr>
        <tr>
          <td style="padding:48px 40px;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(131,239,225,0.1);border-radius:50%;margin:0 auto 24px;font-size:28px;line-height:64px;">✓</div>
            <h2 style="margin:0 0 16px;font-size:26px;font-weight:900;color:#dfe4fe;">
              You're on the list, ${fullName.split(" ")[0]}!
            </h2>
            <p style="margin:0 0 32px;font-size:16px;color:#a5aac2;line-height:1.7;max-width:440px;margin-left:auto;margin-right:auto;">
              Welcome to the inner circle of health pioneers. You'll be among the first to experience your personal Behavioral Digital Twin when we launch.
            </p>
            <div style="background:#0c1326;border-radius:14px;padding:22px;text-align:left;margin-bottom:28px;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#6f758b;">Your registration</p>
              <p style="margin:4px 0;font-size:14px;color:#dfe4fe;"><strong style="color:#83efe1;">Goal:</strong> ${healthGoal}</p>
              <p style="margin:4px 0;font-size:14px;color:#dfe4fe;"><strong style="color:#83efe1;">City:</strong> ${city}</p>
              <p style="margin:4px 0;font-size:14px;color:#dfe4fe;"><strong style="color:#83efe1;">Wearable:</strong> ${wearable === "yes" ? "Yes — perfect for biometric tracking!" : "No — we'll work with what you have"}</p>
            </div>
            <p style="margin:0;font-size:13px;color:#6f758b;line-height:1.6;">
              Follow us on
              <a href="https://twitter.com" style="color:#83efe1;text-decoration:none;">Twitter</a> and
              <a href="https://linkedin.com" style="color:#83efe1;text-decoration:none;">LinkedIn</a>
              for early previews.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px;border-top:1px solid rgba(65,71,91,0.3);">
            <p style="margin:0;font-size:12px;color:#41475b;text-align:center;">
              © 2025 SvasthaX &bull; Clinical Precision &bull; Predictive Power
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

      const [notifyRes, confirmRes] = await Promise.all([
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SvasthaX <onboarding@resend.dev>",
            to: [OWNER_EMAIL],
            subject: `🩺 New Waitlist Signup: ${fullName} (${city})`,
            html: emailHtml,
            reply_to: email,
          }),
        }),
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SvasthaX <onboarding@resend.dev>",
            to: [email],
            subject: "You're on the SvasthaX Waitlist! 🩺",
            html: confirmationHtml,
          }),
        }),
      ]);

      if (!notifyRes.ok) {
        const err = await notifyRes.text();
        console.error("Resend notification error:", err);
      }
      if (!confirmRes.ok) {
        console.warn("Resend confirmation email failed (non-fatal)");
      }
    }

    return NextResponse.json(
      { success: true, message: "You're on the waitlist!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
