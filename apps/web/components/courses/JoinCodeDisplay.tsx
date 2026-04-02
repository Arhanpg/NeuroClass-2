"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JoinCodeDisplay({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <span className="font-mono text-lg tracking-widest font-bold">{code}</span>
      <Button variant="ghost" size="sm" onClick={copy}>{copied ? "Copied!" : "Copy"}</Button>
    </div>
  );
}
