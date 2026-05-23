import type { LeadFormValues } from "@/lib/validation";
import type { NotificationSender } from "@/lib/notifications/types";

const { LEAD_WEBHOOK_URL, LEAD_WEBHOOK_SECRET } = process.env;

function isConfigured() {
  return Boolean(LEAD_WEBHOOK_URL);
}

export const webhookSender: NotificationSender = {
  channel: "webhook",
  configured: isConfigured(),
  async send(lead: LeadFormValues) {
    if (!LEAD_WEBHOOK_URL) {
      throw new Error("Lead webhook is not configured.");
    }

    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    });

    if (LEAD_WEBHOOK_SECRET) {
      headers.set("X-Lead-Webhook-Secret", LEAD_WEBHOOK_SECRET);
    }

    const response = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        event: "lead.created",
        source: "northorbis-aima",
        createdAt: new Date().toISOString(),
        lead
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with ${response.status}: ${await response.text()}`);
    }
  }
};
