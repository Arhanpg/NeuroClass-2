export function MilestoneTracker({ milestones }: { milestones: { name: string; done: boolean }[] }) {
  return (
    <div className="flex items-center gap-2">
      {milestones.map((m, i) => (<div key={i} className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${m.done ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}>{i + 1}</div>
        {i < milestones.length - 1 && <div className={`h-0.5 w-8 ${m.done ? "bg-green-500" : "bg-gray-200"}`} />}
      </div>))}
    </div>
  );
}
