import type { LeadFormValues } from "@/lib/validation";
import { formatLeadAlert } from "@/lib/notifications/format";
import type { NotificationSender } from "@/lib/notifications/types";

const {
  WAHA_API_URL,
  WAHA_API_KEY,
  WAHA_SESSION = "default",
  WAHA_CHAT_ID,
  WAHA_TO
} = process.env;

function isConfigured() {
  return Boolean(WAHA_API_URL && (WAHA_CHAT_ID || WAHA_TO));
}

function toChatId(value: string) {
  if (value.includes("@")) return value;
  const digits = value.replace(/\D/g, "");
  if (!digits) return value;
  return `${digits}@c.us`;
}

export const wahaSender: NotificationSender = {
  channel: "waha",
  configured: isConfigured(),
  async send(lead: LeadFormValues) {
    if (!WAHA_API_URL || (!WAHA_CHAT_ID && !WAHA_TO)) {
      throw new Error("WAHA is not configured.");
    }

    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    });

    if (WAHA_API_KEY) {
      headers.set("X-Api-Key", WAHA_API_KEY);
    }

    const response = await fetch(`${WAHA_API_URL.replace(/\/$/, "")}/api/sendText`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        session: WAHA_SESSION,
        chatId: toChatId(WAHA_CHAT_ID || WAHA_TO || ""),
        text: formatLeadAlert(lead)
      })
    });

    if (!response.ok) {
      throw new Error(`WAHA failed with ${response.status}: ${await response.text()}`);
    }
  }
};
