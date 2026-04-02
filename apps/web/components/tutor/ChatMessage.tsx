"use client";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils/cn";

interface Source {
  title: string;
  url?: string;
  page?: number;
}

function SourceCitation({ title, url, page }: Source) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground border rounded px-1.5 py-0.5">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {title}
        </a>
      ) : (
        <span>{title}</span>
      )}
      {page && <span>p.{page}</span>}
    </span>
  );
}

function CodeBlock({ children, className }: { children: string; className?: string }) {
  return (
    <pre className={cn("bg-muted rounded-md p-3 overflow-x-auto text-sm font-mono", className)}>
      <code>{children}</code>
    </pre>
  );
}

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

export function ChatMessage({ role, content, sources }: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3", role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2 text-sm",
          role === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        )}
      >
        <ReactMarkdown
          components={{
            code({ children, className }) {
              return <CodeBlock className={className}>{String(children)}</CodeBlock>;
            },
          }}
        >
          {content}
        </ReactMarkdown>
        {sources && sources.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {sources.map((s) => (
              <SourceCitation key={s.title} {...s} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
