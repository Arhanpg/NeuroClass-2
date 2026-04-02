import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  slug: string;
  enrolledCount?: number;
}

export function CourseCard({ id: _id, title, description, slug, enrolledCount }: CourseCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>
          <Link href={`/courses/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {enrolledCount !== undefined && (
          <Badge variant="secondary">{enrolledCount} students</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
