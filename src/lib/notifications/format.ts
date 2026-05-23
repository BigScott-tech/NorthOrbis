import type { LeadFormValues } from "@/lib/validation";

const labels: Array<[keyof LeadFormValues, string]> = [
  ["formType", "Form type"],
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["company", "Company"],
  ["website", "Website"],
  ["market", "Market"],
  ["monthlyRevenue", "Monthly revenue"],
  ["serviceInterest", "Priority"],
  ["message", "Message"]
];

export function getLeadSubject(lead: LeadFormValues) {
  const type = lead.formType === "audit" ? "Audit" : "Lead";
  return `New NorthOrbis ${type} request from ${lead.name}`;
}

export function formatLeadText(lead: LeadFormValues) {
  return labels
    .map(([key, label]) => {
      const value = lead[key];
      return `${label}: ${typeof value === "string" && value.trim() ? value : "N/A"}`;
    })
    .join("\n");
}

export function formatLeadAlert(lead: LeadFormValues) {
  return [
    `New ${lead.formType === "audit" ? "audit" : "lead"} on NorthOrbis`,
    `${lead.name} from ${lead.company}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Market: ${lead.market}`,
    `Priority: ${lead.serviceInterest || "N/A"}`,
    "",
    lead.message
  ].join("\n");
}

export function formatLeadHtml(lead: LeadFormValues) {
  const rows = labels
    .map(([key, label]) => {
      const rawValue = lead[key];
      const value = typeof rawValue === "string" && rawValue.trim() ? rawValue : "N/A";

      return `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #242424;color:#A7ADB7;font-weight:700;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #242424;color:#F7F4EC;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="margin:0;padding:24px;background:#0A0A0A;color:#F7F4EC;font-family:Arial,sans-serif;">
      <div style="max-width:720px;margin:0 auto;border:1px solid #242424;border-radius:8px;overflow:hidden;background:#141414;">
        <div style="padding:24px;border-bottom:1px solid #242424;">
          <p style="margin:0 0 8px;color:#D4AF37;font-size:13px;font-weight:700;text-transform:uppercase;">NorthOrbis AIMA</p>
          <h1 style="margin:0;color:#FFFFFF;font-size:24px;line-height:1.25;">${escapeHtml(getLeadSubject(lead))}</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          ${rows}
        </table>
      </div>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
