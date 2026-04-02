"use client";
import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface TutorChatProps {
  courseId: string;
  lectureId?: string;
}

export function TutorChat({ courseId: _courseId, lectureId }: TutorChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [_isTyping, _setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (content: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    _setIsTyping(true);
    try {
      const res = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, lectureId }),
      });
      const data = await res.json();
      const aiMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: data.response ?? "Sorry, I couldn't process that." };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      _setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      <ScrollArea className="flex-1 p-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            Ask anything about this lecture...
          </div>
        )}
        <div className="space-y-4">
          {messages.map((m) => (
            <ChatMessage key={m.id} role={m.role} content={m.content} />
          ))}
        </div>
        <div ref={bottomRef} />
      </ScrollArea>
      <div className="p-3 border-t">
        <ChatInput onSend={handleSend} disabled={loading} />
      </div>
    </div>
  );
}
