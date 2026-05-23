import nodemailer from "nodemailer";
import { site } from "@/lib/content";
import type { LeadFormValues } from "@/lib/validation";
import { formatLeadHtml, formatLeadText, getLeadSubject } from "@/lib/notifications/format";
import type { NotificationSender } from "@/lib/notifications/types";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_SECURE,
  SMTP_FROM,
  NOTIFICATION_EMAIL_TO = site.email
} = process.env;

function isConfigured() {
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASSWORD && NOTIFICATION_EMAIL_TO);
}

export const emailSender: NotificationSender = {
  channel: "email",
  configured: isConfigured(),
  async send(lead: LeadFormValues) {
    if (!isConfigured()) {
      throw new Error("SMTP is not configured.");
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: NOTIFICATION_EMAIL_TO,
      replyTo: lead.email,
      subject: getLeadSubject(lead),
      text: formatLeadText(lead),
      html: formatLeadHtml(lead)
    });
  }
};
