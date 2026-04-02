import { Button } from "@/components/ui/button";

export function ApprovalActions({ gradeId }: { gradeId: string }) {
  return (
    <div className="flex gap-3">
      <Button className="bg-green-600 hover:bg-green-700">âœ“ Approve</Button>
      <Button variant="outline">âœŽ Override</Button>
      <Button variant="destructive">âœ• Reject</Button>
    </div>
  );
}
