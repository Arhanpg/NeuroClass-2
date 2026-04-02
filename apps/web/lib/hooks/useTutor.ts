"use client";
import { useState, useCallback } from "react";

export function useTutor(courseId: string) {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [streaming, setStreaming] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    setMessages((prev) => [...prev, { role: "user", content }]);
    setStreaming(true);
    const res = await fetch("/api/ai/invoke", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ courseId, message: content }) });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "ai", content: data.response }]);
    setStreaming(false);
  }, [courseId]);

  return { messages, streaming, sendMessage };
}
