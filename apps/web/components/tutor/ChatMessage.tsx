import { CodeBlock } from "./CodeBlock";
import { SourceCitation } from "./SourceCitation";

export function ChatMessage({ role, content }: { role: "user" | "ai"; content: string }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${role === "user" ? "bg-brand-500 text-white" : "bg-gray-100 dark:bg-gray-800"}`}>{content}</div>
    </div>
  );
}
