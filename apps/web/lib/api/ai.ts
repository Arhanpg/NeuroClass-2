export async function invokeAI(payload: { courseId: string; message: string; threadId?: string }) {
  const res = await fetch("/api/ai/invoke", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  if (!res.ok) throw new Error("AI invocation failed");
  return res.json();
}
