"use client";
import { useState } from "react";

export function CodeBlock({ code, language = "python" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-950 text-gray-100 text-sm my-2">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-xs"><span>{language}</span><button onClick={copy} className="hover:text-white">{copied ? "Copied!" : "Copy"}</button></div>
      <pre className="p-4 overflow-x-auto"><code>{code}</code></pre>
    </div>
  );
}
