import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LectureCard({ title, status }: { title: string; status: "embedded" | "processing" | "failed" }) {
  return (
    <Card><CardHeader><div className="flex justify-between"><CardTitle className="text-lg">{title}</CardTitle><Badge variant={status === "embedded" ? "success" : status === "processing" ? "warning" : "destructive"}>{status}</Badge></div></CardHeader></Card>
  );
}
