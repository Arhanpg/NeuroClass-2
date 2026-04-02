import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps { id: string; title: string; description: string; pedagogy: string; studentCount?: number; }

export function CourseCard({ id, title, description, pedagogy, studentCount }: CourseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader><div className="flex justify-between items-start"><CardTitle>{title}</CardTitle><Badge variant="secondary">{pedagogy}</Badge></div></CardHeader>
      <CardContent><p className="text-sm text-gray-500">{description}</p>{studentCount !== undefined && <p className="text-xs text-gray-400 mt-2">{studentCount} students</p>}</CardContent>
    </Card>
  );
}
