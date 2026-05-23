import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "northorbis-aima",
    timestamp: new Date().toISOString()
  });
}
