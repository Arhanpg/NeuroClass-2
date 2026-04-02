import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function GradeCard({ project, score, status }: { project: string; score: number; status: string }) {
  return (
    <Card><CardHeader><div className="flex justify-between"><CardTitle className="text-lg">{project}</CardTitle><Badge variant={status === "APPROVED" ? "success" : "warning"}>{status}</Badge></div></CardHeader>
      <CardContent><div className="text-3xl font-bold text-brand-500">{score}<span className="text-lg text-gray-400">/100</span></div></CardContent>
    </Card>
  );
}
