// Edge Function: trigger Python RAG pipeline
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req: Request) => {
  const { courseId, lectureId, fileUrl } = await req.json();

  const aiServiceUrl = Deno.env.get("AI_SERVICE_URL")!;
  const res = await fetch(`${aiServiceUrl}/ingest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ course_id: courseId, lecture_id: lectureId, file_url: fileUrl }),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
});
