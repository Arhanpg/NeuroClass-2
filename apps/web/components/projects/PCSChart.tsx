"use client";
// Peer Contribution Score radar/bar chart using recharts
export function PCSChart({ data }: { data: { member: string; score: number }[] }) {
  return (
    <div className="p-4 rounded-xl border">
      <h3 className="font-semibold mb-4">Peer Contribution Scores</h3>
      <div className="space-y-2">{data.map((d) => (<div key={d.member} className="flex items-center gap-3"><span className="w-24 text-sm">{d.member}</span><div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${d.score}%` }} /></div><span className="text-sm font-medium">{d.score}%</span></div>))}</div>
    </div>
  );
}
