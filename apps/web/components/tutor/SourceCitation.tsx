export function SourceCitation({ title, page }: { title: string; page?: number }) {
  return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs cursor-pointer hover:bg-blue-100">ðŸ“„ {title}{page && ` p.${page}`}</span>;
}
