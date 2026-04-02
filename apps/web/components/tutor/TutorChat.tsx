"use client";
import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";

export function TutorChat({ courseId }: { courseId: string }) {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 rounded-xl border">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">{messages.map((m, i) => <ChatMessage key={i} {...m} />)}{isTyping && <TypingIndicator />}</div>
      <ChatInput onSend={(msg) => setMessages((prev) => [...prev, { role: "user", content: msg }])} />
    </div>
  );
}
