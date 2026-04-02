import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // Proxy request to LangGraph Cloud Run service with auth validation
  const body = await request.json();
  const aiServiceUrl = process.env.AI_SERVICE_URL!;
  const res = await fetch(`${aiServiceUrl}/invoke`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.AI_SERVICE_KEY}` },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
