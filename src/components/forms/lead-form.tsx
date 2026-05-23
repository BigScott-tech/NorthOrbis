"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { leadSchema, type LeadFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  formType: "contact" | "audit";
  className?: string;
};

const inputClass =
  "min-h-12 w-full rounded-lg border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-steel/70 focus:border-gold/70 focus:ring-2 focus:ring-gold/20";

const labelClass = "text-sm font-semibold text-platinum";

export function LeadForm({ formType, className }: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      formType,
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      market: "",
      monthlyRevenue: "",
      serviceInterest: formType === "audit" ? "Free HVAC Marketing Audit" : "",
      message: "",
      consent: false,
      companyWebsite: ""
    }
  });

  async function onSubmit(values: LeadFormValues) {
    setServerError("");
    setSent(false);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setServerError("Something did not submit correctly. Please check the fields and try again.");
      return;
    }

    setSent(true);
    reset({
      ...values,
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      message: "",
      consent: false,
      companyWebsite: ""
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("grid gap-5", className)} noValidate>
      <input type="hidden" value={formType} {...register("formType")} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("companyWebsite")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input className={inputClass} placeholder="Alex Morgan" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Business email" error={errors.email?.message}>
          <input className={inputClass} placeholder="alex@hvaccompany.com" autoComplete="email" {...register("email")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input className={inputClass} placeholder="+1 555 0100" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field label="HVAC company" error={errors.company?.message}>
          <input className={inputClass} placeholder="Your company" autoComplete="organization" {...register("company")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Website" error={errors.website?.message}>
          <input className={inputClass} placeholder="https://example.com" autoComplete="url" {...register("website")} />
        </Field>
        <Field label="Primary market" error={errors.market?.message}>
          <input className={inputClass} placeholder="Dallas, London, Berlin, Dubai..." {...register("market")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Monthly revenue range" error={errors.monthlyRevenue?.message}>
          <select className={inputClass} {...register("monthlyRevenue")}>
            <option value="">Select range</option>
            <option value="Under $100k">Under $100k</option>
            <option value="$100k-$250k">$100k-$250k</option>
            <option value="$250k-$750k">$250k-$750k</option>
            <option value="$750k+">$750k+</option>
          </select>
        </Field>
        <Field label="Main priority" error={errors.serviceInterest?.message}>
          <select className={inputClass} {...register("serviceInterest")}>
            <option value="">Select priority</option>
            <option value="Free HVAC Marketing Audit">Free HVAC Marketing Audit</option>
            <option value="Paid advertising">Paid advertising</option>
            <option value="Social media management">Social media management</option>
            <option value="Lead generation system">Lead generation system</option>
            <option value="Premium growth plan">Premium growth plan</option>
          </select>
        </Field>
      </div>

      <Field label={formType === "audit" ? "What should we audit first?" : "How can we help?"} error={errors.message?.message}>
        <textarea
          className={cn(inputClass, "min-h-32 resize-y")}
          placeholder="Tell us what is working, what is not, and your growth target."
          {...register("message")}
        />
      </Field>

      <label className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-steel">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-gold focus:ring-gold"
          {...register("consent")}
        />
        <span>
          I agree that NorthOrbis AIMA may contact me about this request. No spam, no resale of lead data.
          {errors.consent?.message ? <span className="mt-1 block text-gold-soft">{errors.consent.message}</span> : null}
        </span>
      </label>

      {serverError ? <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-100">{serverError}</p> : null}
      {sent ? (
        <p className="inline-flex items-center gap-2 rounded-lg border border-signal/30 bg-signal/10 p-3 text-sm font-semibold text-white">
          <CheckCircle2 className="h-4 w-4 text-signal" />
          Request received. We will review your market and follow up shortly.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {formType === "audit" ? "Request My Free Audit" : "Send Request"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className={labelClass}>{label}</span>
      {children}
      {error ? <span className="text-sm text-gold-soft">{error}</span> : null}
    </label>
  );
}
