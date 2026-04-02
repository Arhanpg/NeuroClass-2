export function RankBadge({ rank }: { rank: number }) {
  const colors: Record<number, string> = { 1: "bg-yellow-400 text-yellow-900", 2: "bg-gray-300 text-gray-700", 3: "bg-orange-400 text-orange-900" };
  return <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${colors[rank] || "bg-gray-100 dark:bg-gray-800"}`}>{rank}</div>;
}
