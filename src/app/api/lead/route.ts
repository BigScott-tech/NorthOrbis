import { NextResponse } from "next/server";
import { dispatchLeadNotifications } from "@/lib/notifications";
import { leadSchema } from "@/lib/validation";

export const runtime = "nodejs";

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

  const notification = await dispatchLeadNotifications(parsed.data);

  if (!notification.ok) {
    console.error("Lead notification failure:", notification);
    return NextResponse.json(
      {
        ok: false,
        message: "Notification delivery is not configured correctly. Please contact us directly."
      },
      { status: 502 }
    );
  }

  console.info("Lead notification status:", notification.results);

  return NextResponse.json({
    ok: true,
    notifications: process.env.NODE_ENV === "production" ? undefined : notification.results
  });
}
