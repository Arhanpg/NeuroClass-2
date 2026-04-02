import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const _event = req.headers.get("x-github-event");
  // TODO: Phase 2 — handle GitHub webhook events for repo sync
  return NextResponse.json({ received: true });
}
