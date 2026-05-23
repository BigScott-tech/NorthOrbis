import type { LeadFormValues } from "@/lib/validation";
import { formatLeadAlert, getLeadSubject } from "@/lib/notifications/format";
import type { NotificationSender } from "@/lib/notifications/types";

const {
  NTFY_BASE_URL = "https://ntfy.sh",
  NTFY_TOPIC,
  NTFY_TOPIC_URL,
  NTFY_TOKEN,
  NTFY_USERNAME,
  NTFY_PASSWORD,
  NEXT_PUBLIC_SITE_URL
} = process.env;

function topicUrl() {
  if (NTFY_TOPIC_URL) return NTFY_TOPIC_URL;
  if (!NTFY_TOPIC) return "";
  return `${NTFY_BASE_URL.replace(/\/$/, "")}/${encodeURIComponent(NTFY_TOPIC)}`;
}

function isConfigured() {
  return Boolean(topicUrl());
}

export const ntfySender: NotificationSender = {
  channel: "ntfy",
  configured: isConfigured(),
  async send(lead: LeadFormValues) {
    const url = topicUrl();

    if (!url) {
      throw new Error("ntfy is not configured.");
    }

    const headers = new Headers({
      Title: getLeadSubject(lead),
      Priority: "high",
      Tags: "briefcase,phone"
    });

    if (NEXT_PUBLIC_SITE_URL) {
      headers.set("Click", NEXT_PUBLIC_SITE_URL);
    }

    if (NTFY_TOKEN) {
      headers.set("Authorization", `Bearer ${NTFY_TOKEN}`);
    } else if (NTFY_USERNAME && NTFY_PASSWORD) {
      headers.set("Authorization", `Basic ${Buffer.from(`${NTFY_USERNAME}:${NTFY_PASSWORD}`).toString("base64")}`);
    }

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: formatLeadAlert(lead)
    });

    if (!response.ok) {
      throw new Error(`ntfy failed with ${response.status}: ${await response.text()}`);
    }
  }
};
