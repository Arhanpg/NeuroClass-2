import { cn } from "@/lib/utils/cn";

export function Progress({ value = 0, className }: { value?: number; className?: string }) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800", className)}>
      <div className="h-full bg-brand-500 transition-all duration-500" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}
