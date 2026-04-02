"use client";
import { Button } from "@/components/ui/button";

interface ApprovalActionsProps {
  gradeId: string;
  onApprove: () => void;
  onReject: () => void;
}

export function ApprovalActions({ gradeId: _gradeId, onApprove, onReject }: ApprovalActionsProps) {
  return (
    <div className="flex gap-2">
      <Button onClick={onApprove} variant="default" size="sm">
        Approve
      </Button>
      <Button onClick={onReject} variant="destructive" size="sm">
        Reject
      </Button>
    </div>
  );
}
