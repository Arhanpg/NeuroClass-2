"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CriterionScore {
  name: string;
  score: number;
  maxScore: number;
  feedback: string;
}

function CriterionScoreRow({ name, score, maxScore, feedback }: CriterionScore) {
  return (
    <div className="py-2 border-b last:border-0">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{score}/{maxScore}</span>
      </div>
      {feedback && <p className="text-sm text-muted-foreground mt-1">{feedback}</p>}
    </div>
  );
}

interface GradeReviewPanelProps {
  criteria: CriterionScore[];
  totalScore: number;
  maxScore: number;
}

export function GradeReviewPanel({ criteria, totalScore, maxScore }: GradeReviewPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Review — {totalScore}/{maxScore}</CardTitle>
      </CardHeader>
      <CardContent>
        {criteria.map((c) => (
          <CriterionScoreRow key={c.name} {...c} />
        ))}
      </CardContent>
    </Card>
  );
}
