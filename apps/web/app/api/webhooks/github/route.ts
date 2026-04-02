import { NextResponse, type NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get("x-hub-signature-256");
  const secret = process.env.GITHUB_WEBHOOK_SECRET!;
  const expected = `sha256=${crypto.createHmac("sha256", secret).update(payload).digest("hex")}`;
  if (signature !== expected) return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  const event = JSON.parse(payload);
  // Process push event â€” store commits for PCS
  return NextResponse.json({ received: true });
}
