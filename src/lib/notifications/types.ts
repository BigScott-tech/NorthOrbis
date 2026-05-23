import type { LeadFormValues } from "@/lib/validation";

export type LeadNotificationChannel = "email" | "ntfy" | "waha" | "webhook";

export type NotificationSendResult = {
  channel: LeadNotificationChannel;
  configured: boolean;
  ok: boolean;
  skipped?: boolean;
  error?: string;
};

export type NotificationSender = {
  channel: LeadNotificationChannel;
  configured: boolean;
  send: (lead: LeadFormValues) => Promise<void>;
};
