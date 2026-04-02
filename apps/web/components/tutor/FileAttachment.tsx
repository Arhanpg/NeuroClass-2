export function FileAttachment({ name, size }: { name: string; size: string }) {
  return <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">ðŸ“Ž {name} <span className="text-gray-400">{size}</span></div>;
}
