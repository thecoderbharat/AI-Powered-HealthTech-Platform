import { NextRequest, NextResponse } from "next/server";

// ─── Types ─────────────────────────────────────────────────────────────────
interface WaitlistPayload {
  fullName: string;
  email: string;
  healthGoal: string;
  city: string;
  wearable: "yes" | "no";
}

// ─── Runtime: Node.js (default, most compatible with Next.js 15) ───────────
// Switch to "edge" if you want Vercel Edge Network deployment
export const runtime = "nodejs";

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

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // 2. Check env var
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL; // your email address

    if (!RESEND_API_KEY || !OWNER_EMAIL) {
      console.error("Missing RESEND_API_KEY or OWNER_EMAIL env vars");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 3. Build HTML email body
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Waitlist Signup — WellAhead.ai</title>
</head>
<body style="margin:0;padding:0;background:#070d1f;font-family:'Inter',Arial,sans-serif;color:#dfe4fe;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070d1f;padding:40px 20px;">
    <tr>
      <td>
        <table width="600" align="center" cellpadding="0" cellspacing="0"
          style="background:#11192e;border-radius:24px;overflow:hidden;border:1px solid rgba(65,71,91,0.3);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#83efe1 0%,#3fb1a5 100%);padding:32px 40px;">
              <h1 style="margin:0;font-size:24px;font-weight:900;color:#002824;letter-spacing:-0.5px;">
                WellAhead.ai
              </h1>
              <p style="margin:6px 0 0;font-size:13px;color:#004840;font-weight:600;">
                New Waitlist Signup Received
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;font-size:15px;color:#a5aac2;line-height:1.6;">
                A new user has joined the WellAhead.ai waitlist. Here are their details:
              </p>

              <!-- Data table -->
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
                  <td style="padding:12px 16px;background:#0c1326;border-radius:10px;margin-bottom:8px;display:block;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#6f758b;">${label}</span>
                    <br/>
                    <span style="font-size:15px;font-weight:600;color:#dfe4fe;margin-top:4px;display:block;">${value}</span>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                `
                  )
                  .join("")}
              </table>

              <!-- CTA hint -->
              <div style="margin-top:32px;padding:20px;background:rgba(131,239,225,0.05);border-radius:12px;border:1px solid rgba(131,239,225,0.15);">
                <p style="margin:0;font-size:13px;color:#83efe1;line-height:1.6;">
                  💡 <strong>Next step:</strong> Add <strong>${email}</strong> to your CRM or reply directly to welcome them to the inner circle.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid rgba(65,71,91,0.3);">
              <p style="margin:0;font-size:12px;color:#41475b;text-align:center;">
                This notification was sent automatically by WellAhead.ai &bull; Do not reply to this email
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // 4. Also send a confirmation email to the user
    const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the WellAhead.ai Waitlist!</title>
</head>
<body style="margin:0;padding:0;background:#070d1f;font-family:'Inter',Arial,sans-serif;color:#dfe4fe;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070d1f;padding:40px 20px;">
    <tr>
      <td>
        <table width="600" align="center" cellpadding="0" cellspacing="0"
          style="background:#11192e;border-radius:24px;overflow:hidden;border:1px solid rgba(65,71,91,0.3);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#83efe1 0%,#3fb1a5 100%);padding:40px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:900;color:#002824;letter-spacing:-0.5px;">
                WellAhead.ai
              </h1>
              <p style="margin:8px 0 0;font-size:14px;color:#004840;font-weight:600;">
                Clinical-Grade Preventive AI
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px;text-align:center;">
              <div style="width:64px;height:64px;background:rgba(131,239,225,0.1);border-radius:50%;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:28px;">
                ✓
              </div>
              <h2 style="margin:0 0 16px;font-size:26px;font-weight:900;color:#dfe4fe;letter-spacing:-0.5px;">
                You're on the list, ${fullName.split(" ")[0]}!
              </h2>
              <p style="margin:0 0 32px;font-size:16px;color:#a5aac2;line-height:1.7;max-width:440px;margin-left:auto;margin-right:auto;">
                Welcome to the inner circle of health pioneers. You'll be among the first to experience your personal Behavioral Digital Twin when we launch.
              </p>

              <div style="background:#0c1326;border-radius:16px;padding:24px;text-align:left;margin-bottom:32px;">
                <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#6f758b;">Your registration summary</p>
                <p style="margin:4px 0;font-size:14px;color:#dfe4fe;"><strong style="color:#83efe1;">Goal:</strong> ${healthGoal}</p>
                <p style="margin:4px 0;font-size:14px;color:#dfe4fe;"><strong style="color:#83efe1;">City:</strong> ${city}</p>
                <p style="margin:4px 0;font-size:14px;color:#dfe4fe;"><strong style="color:#83efe1;">Wearable:</strong> ${wearable === "yes" ? "Yes — great for biometric tracking!" : "No — we'll work with what you have"}</p>
              </div>

              <p style="margin:0;font-size:13px;color:#6f758b;line-height:1.6;">
                While you wait, follow us on
                <a href="https://twitter.com" style="color:#83efe1;text-decoration:none;">Twitter</a> and
                <a href="https://linkedin.com" style="color:#83efe1;text-decoration:none;">LinkedIn</a>
                for early previews and clinical insights.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid rgba(65,71,91,0.3);">
              <p style="margin:0;font-size:12px;color:#41475b;text-align:center;">
                © 2024 WellAhead.ai &bull; Clinical Precision &bull; Predictive Power
                <br/>You're receiving this because you signed up at wellahead.ai
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // 5. Send both emails via Resend API
    const [notifyRes, confirmRes] = await Promise.all([
      // Email TO YOU (site owner notification)
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "WellAhead.ai <onboarding@resend.dev>",
          to: [OWNER_EMAIL],
          subject: `🩺 New Waitlist Signup: ${fullName} (${city})`,
          html: emailHtml,
          reply_to: email,
        }),
      }),

      // Confirmation email TO THE USER
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "WellAhead.ai <onboarding@resend.dev>",
          to: [email],
          subject: "You're on the WellAhead.ai Waitlist! 🩺",
          html: confirmationHtml,
        }),
      }),
    ]);

    // 6. Check responses
    if (!notifyRes.ok) {
      const err = await notifyRes.text();
      console.error("Resend notification error:", err);
      return NextResponse.json(
        { error: "Failed to send notification email." },
        { status: 500 }
      );
    }

    if (!confirmRes.ok) {
      // Confirmation failure is non-fatal — still return success
      console.warn("Resend confirmation email failed (non-fatal)");
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
