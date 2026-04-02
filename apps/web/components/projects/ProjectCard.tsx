import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function ProjectCard({ title, status, progress }: { title: string; status: string; progress: number }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader><div className="flex justify-between"><CardTitle className="text-lg">{title}</CardTitle><Badge>{status}</Badge></div></CardHeader>
      <CardContent><Progress value={progress} /><p className="text-xs text-gray-400 mt-1">{progress}% complete</p></CardContent>
    </Card>
  );
}
