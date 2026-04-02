import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface LectureCardProps {
  id: string;
  title: string;
  description?: string;
  courseSlug: string;
  embeddingStatus?: string;
}

export function LectureCard({ id, title, description, courseSlug, embeddingStatus }: LectureCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">
            <Link href={`/courses/${courseSlug}/lectures/${id}`} className="hover:underline">
              {title}
            </Link>
          </CardTitle>
          {embeddingStatus && (
            <Badge
              variant={embeddingStatus === "DONE" ? "default" : "secondary"}
              className="shrink-0 text-xs"
            >
              {embeddingStatus}
            </Badge>
          )}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
    </Card>
  );
}
