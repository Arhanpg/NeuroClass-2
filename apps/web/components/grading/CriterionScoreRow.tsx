export function CriterionScoreRow({ name, score, maxScore, justification }: { name: string; score: number; maxScore: number; justification: string }) {
  return (
    <div className="flex items-start gap-4 py-3 border-b last:border-0">
      <div className="flex-1"><div className="font-medium">{name}</div><p className="text-sm text-gray-500 mt-1">{justification}</p></div>
      <div className="text-lg font-bold">{score}<span className="text-gray-400">/{maxScore}</span></div>
    </div>
  );
}
