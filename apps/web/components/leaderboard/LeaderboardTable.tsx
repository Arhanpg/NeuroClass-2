"use client";
import { RankBadge } from "./RankBadge";

export function LeaderboardTable({ courseId }: { courseId: string }) {
  const mockData = [{ rank: 1, name: "Alice", score: 98 }, { rank: 2, name: "Bob", score: 95 }];
  return (
    <div className="space-y-2">{mockData.map((entry) => (
      <div key={entry.rank} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border hover:shadow transition-shadow">
        <RankBadge rank={entry.rank} /><span className="flex-1 font-medium">{entry.name}</span><span className="font-bold text-brand-500">{entry.score}</span>
      </div>
    ))}</div>
  );
}
