"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileAttachment } from "./FileAttachment";

export function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (value.trim()) { onSend(value); setValue(""); } };
  return (
    <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2 items-end">
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ask your AI tutor..." className="flex-1 min-h-[44px] max-h-32 resize-none" rows={1} />
      <Button type="submit" size="icon">âž¤</Button>
    </form>
  );
}
