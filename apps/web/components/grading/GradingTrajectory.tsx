export function GradingTrajectory({ gradeId }: { gradeId: string }) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Grading Trajectory</h3>
      <div className="text-sm text-gray-500">Node execution history visualization for grade {gradeId}</div>
    </div>
  );
}
