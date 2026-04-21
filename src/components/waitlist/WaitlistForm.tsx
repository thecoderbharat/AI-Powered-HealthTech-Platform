"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Loader2, Sparkles } from "lucide-react";
import {
  slideInRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type WearableOption = "yes" | "no" | null;

interface FormData {
  fullName: string;
  email: string;
  healthGoal: string;
  city: string;
  wearable: WearableOption;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  healthGoal: "",
  city: "",
  wearable: null,
};

const healthGoalOptions = [
  "Peak Performance",
  "Longevity & Aging",
  "Disease Prevention",
  "General Vitality",
  "Metabolic Health",
  "Mental Wellness",
];

// Reusable input label
function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 font-label ml-1"
    >
      {children}
    </label>
  );
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // ── Validation ──────────────────────────────────────────────────────────
  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.healthGoal) newErrors.healthGoal = "Please select a health goal";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.wearable) newErrors.wearable = "Please select an option";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // ── Submit handler ───────────────────────────────────────────────────────
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrors({ email: message });
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Input base classes ───────────────────────────────────────────────────
  const inputClasses = cn(
    "w-full bg-surface-container-lowest rounded-xl px-5 py-4",
    "text-on-surface placeholder:text-outline text-sm font-body",
    "border-0 outline-none",
    "transition-all duration-200",
    "focus:shadow-[0_0_0_2px_#83efe1,0_0_20px_rgba(131,239,225,0.2)]"
  );

  return (
    <motion.div
      className="w-full"
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="glass-panel p-8 md:p-10 rounded-[1.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative overflow-hidden border border-white/[0.08]">
        {/* AI glow accents */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/[0.12] blur-3xl rounded-full pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-10 -left-10 w-32 h-32 bg-primary/[0.06] blur-3xl rounded-full pointer-events-none"
        />

        {/* ── Success state ── */}
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center justify-center text-center py-12 gap-5"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center"
              >
                <CheckCircle2 className="text-primary" size={40} strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-headline font-extrabold text-2xl text-on-surface">
                You&apos;re on the list!
              </h3>
              <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
                Welcome to the inner circle. We&apos;ll reach out with your exclusive
                early access details very soon.
              </p>
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest font-headline">
                <Sparkles size={14} aria-hidden="true" />
                SvasthaX — Early Adopter
              </div>
            </motion.div>
          ) : (
            <motion.div key="form" className="relative z-10">
              {/* Form header */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="mb-7"
              >
                <motion.h2
                  variants={staggerItem}
                  className="font-headline font-bold text-xl text-on-surface mb-1.5"
                >
                  Join the Inner Circle
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  className="text-on-surface-variant text-sm leading-relaxed"
                >
                  Fill out the details below to secure your spot in our limited
                  beta launch.
                </motion.p>
              </motion.div>

              {/* ── Form ── */}
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Waitlist signup form"
                className="space-y-5"
              >
                {/* Full Name */}
                <div>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, fullName: e.target.value }));
                      if (errors.fullName) setErrors((p) => ({ ...p, fullName: undefined }));
                    }}
                    className={cn(inputClasses, errors.fullName && "shadow-[0_0_0_2px_#ff716c]")}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="text-error text-xs mt-1.5 ml-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, email: e.target.value }));
                      if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    className={cn(inputClasses, errors.email && "shadow-[0_0_0_2px_#ff716c]")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-error text-xs mt-1.5 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Health Goal */}
                <div>
                  <FieldLabel htmlFor="healthGoal">What is your primary health goal?</FieldLabel>
                  <div className="relative">
                    <select
                      id="healthGoal"
                      value={formData.healthGoal}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, healthGoal: e.target.value }));
                        if (errors.healthGoal) setErrors((p) => ({ ...p, healthGoal: undefined }));
                      }}
                      className={cn(
                        inputClasses,
                        "appearance-none cursor-pointer pr-12",
                        !formData.healthGoal && "text-outline",
                        errors.healthGoal && "shadow-[0_0_0_2px_#ff716c]"
                      )}
                      aria-invalid={!!errors.healthGoal}
                      aria-describedby={errors.healthGoal ? "healthGoal-error" : undefined}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {healthGoalOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface-container text-on-surface">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                  {errors.healthGoal && (
                    <p id="healthGoal-error" role="alert" className="text-error text-xs mt-1.5 ml-1">
                      {errors.healthGoal}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <FieldLabel htmlFor="city">City</FieldLabel>
                  <input
                    id="city"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="e.g., San Francisco"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, city: e.target.value }));
                      if (errors.city) setErrors((p) => ({ ...p, city: undefined }));
                    }}
                    className={cn(inputClasses, errors.city && "shadow-[0_0_0_2px_#ff716c]")}
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                  />
                  {errors.city && (
                    <p id="city-error" role="alert" className="text-error text-xs mt-1.5 ml-1">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Wearable Toggle */}
                <div>
                  <FieldLabel htmlFor="wearable-yes">Wearable Usage</FieldLabel>
                  <div
                    className="grid grid-cols-2 gap-3"
                    role="group"
                    aria-labelledby="wearable-label"
                    aria-describedby={errors.wearable ? "wearable-error" : undefined}
                  >
                    {(["yes", "no"] as const).map((option) => {
                      const isSelected = formData.wearable === option;
                      return (
                        <motion.button
                          key={option}
                          type="button"
                          id={`wearable-${option}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={tapScale}
                          onClick={() => {
                            setFormData((p) => ({ ...p, wearable: option }));
                            if (errors.wearable) setErrors((p) => ({ ...p, wearable: undefined }));
                          }}
                          aria-pressed={isSelected}
                          className={cn(
                            "flex items-center justify-center gap-2.5 py-7 rounded-xl transition-all duration-200",
                            "border font-headline font-bold text-lg",
                            isSelected
                              ? "bg-surface-container border-primary/40 text-primary shadow-[0_0_20px_rgba(131,239,225,0.1)]"
                              : "bg-surface-container-lowest border-white/[0.05] text-on-surface hover:bg-surface-variant"
                          )}
                        >
                          {isSelected && option === "yes" && (
                            <CheckCircle2 className="text-primary" size={18} aria-hidden="true" />
                          )}
                          {option === "yes" ? "Yes" : "No"}
                        </motion.button>
                      );
                    })}
                  </div>
                  {errors.wearable && (
                    <p id="wearable-error" role="alert" className="text-error text-xs mt-1.5 ml-1">
                      {errors.wearable}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? hoverScaleButton : {}}
                  whileTap={!isSubmitting ? tapScale : {}}
                  className={cn(
                    "w-full vitality-gradient text-on-primary-container",
                    "font-headline font-extrabold text-lg py-5 rounded-full",
                    "shadow-[0_10px_25px_-5px_rgba(131,239,225,0.35)]",
                    "transition-all duration-200 mt-2",
                    "flex items-center justify-center gap-3",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                  aria-label={isSubmitting ? "Submitting your waitlist application…" : "Join the SvasthaX waitlist"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                      Securing your spot…
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
