import type { LeadFormValues } from "@/lib/validation";
import { emailSender } from "@/lib/notifications/email";
import { ntfySender } from "@/lib/notifications/ntfy";
import type { NotificationSendResult, NotificationSender } from "@/lib/notifications/types";
import { wahaSender } from "@/lib/notifications/waha";
import { webhookSender } from "@/lib/notifications/webhook";

const senders: NotificationSender[] = [emailSender, ntfySender, wahaSender, webhookSender];

export async function dispatchLeadNotifications(lead: LeadFormValues) {
  const configuredSenders = senders.filter((sender) => sender.configured);
  const skipped = senders
    .filter((sender) => !sender.configured)
    .map<NotificationSendResult>((sender) => ({
      channel: sender.channel,
      configured: false,
      ok: false,
      skipped: true
    }));

  if (configuredSenders.length === 0) {
    return {
      ok: process.env.NODE_ENV !== "production" || process.env.ALLOW_NO_LEAD_NOTIFICATIONS === "true",
      results: skipped,
      error: "No lead notification channels are configured."
    };
  }

  const settled = await Promise.allSettled(configuredSenders.map((sender) => sender.send(lead)));
  const sent = settled.map<NotificationSendResult>((result, index) => {
    const channel = configuredSenders[index].channel;

    if (result.status === "fulfilled") {
      return {
        channel,
        configured: true,
        ok: true
      };
    }

    return {
      channel,
      configured: true,
      ok: false,
      error: normalizeError(result.reason)
    };
  });

  const results = [...sent, ...skipped];
  const ok = sent.some((result) => result.ok);

  return {
    ok,
    results,
    error: ok ? undefined : "All configured lead notification channels failed."
  };
}

function normalizeError(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
