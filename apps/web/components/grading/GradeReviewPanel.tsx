import { CriterionScoreRow } from "./CriterionScoreRow";
import { ApprovalActions } from "./ApprovalActions";
import { GradingTrajectory } from "./GradingTrajectory";

export function GradeReviewPanel({ gradeId }: { gradeId: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border p-6"><h3 className="font-semibold mb-4">Criterion Scores</h3>{/* CriterionScoreRow list */}</div>
      <GradingTrajectory gradeId={gradeId} />
      <ApprovalActions gradeId={gradeId} />
    </div>
  );
}
