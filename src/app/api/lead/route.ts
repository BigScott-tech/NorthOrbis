import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { leadSchema } from "@/lib/validation";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_SECURE,
  NOTIFICATION_EMAIL_TO = "northorbisteam@gmail.com",
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP_FROM,
  TWILIO_WHATSAPP_TO = "whatsapp:+2349078501664"
} = process.env;

function formatLeadMessage(data: z.infer<typeof leadSchema>) {
  return [`Form type: ${data.formType}`,
  `Name: ${data.name}`,
  `Email: ${data.email}`,
  `Phone: ${data.phone}`,
  `Company: ${data.company}`,
  `Website: ${data.website || "N/A"}`,
  `Market: ${data.market}`,
  `Monthly revenue: ${data.monthlyRevenue || "N/A"}`,
  `Priority: ${data.serviceInterest || "N/A"}`,
  `Message: ${data.message}`].join("\n");
}

async function sendNotificationEmail(data: z.infer<typeof leadSchema>) {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD.");
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

  const subject = `New ${data.formType === "audit" ? "Audit" : "Lead"} request from ${data.name}`;
  const text = formatLeadMessage(data);
  const html = text.replace(/\n/g, "<br />");

  await transporter.sendMail({
    from: SMTP_USER,
    to: NOTIFICATION_EMAIL_TO,
    subject,
    text,
    html
  });
}

async function sendWhatsappAlert(data: z.infer<typeof leadSchema>) {
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_FROM) {
    throw new Error("Twilio WhatsApp configuration is missing. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_FROM.");
  }

  const body = `New ${data.formType === "audit" ? "audit" : "lead"} submission from ${data.name} (${data.email}) on NorthOrbis. Market: ${data.market}. Please check the inbox.`;
  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
  const payload = new URLSearchParams({
    To: TWILIO_WHATSAPP_TO,
    From: TWILIO_WHATSAPP_FROM,
    Body: body
  });

  const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: payload.toString()
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`WhatsApp send failed: ${response.status} ${errorBody}`);
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const tasks: Promise<void>[] = [];

  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASSWORD) {
    tasks.push(sendNotificationEmail(parsed.data));
  } else {
    console.warn("SMTP not configured; skipping email notification.");
  }

  if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_WHATSAPP_FROM) {
    tasks.push(sendWhatsappAlert(parsed.data));
  } else {
    console.warn("Twilio not configured; skipping WhatsApp notification.");
  }

  try {
    if (tasks.length > 0) await Promise.all(tasks);
  } catch (error) {
    console.error("Lead notification error:", error);
    return NextResponse.json({ ok: false, message: "Failed to send notification." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
