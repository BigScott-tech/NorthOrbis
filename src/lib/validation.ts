import { z } from "zod";

export const leadSchema = z.object({
  formType: z.enum(["contact", "audit"]),
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid business email."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  company: z.string().trim().min(2, "Enter your company name."),
  website: z.string().trim().optional(),
  market: z.string().trim().min(2, "Tell us your primary market."),
  monthlyRevenue: z.string().trim().optional(),
  serviceInterest: z.string().trim().optional(),
  message: z.string().trim().min(10, "Add a little context so we can prepare properly."),
  consent: z.boolean().refine(Boolean, "Please confirm we may contact you about your request."),
  companyWebsite: z.string().optional()
});

export type LeadFormValues = z.infer<typeof leadSchema>;
