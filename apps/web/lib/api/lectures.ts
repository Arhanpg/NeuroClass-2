import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function uploadLecture(courseId: string, file: File) {
  const path = `lectures/${courseId}/${file.name}`;
  const { data, error } = await supabase.storage.from("lecture-files").upload(path, file);
  if (error) throw error;
  // Trigger ingestion
  await fetch(`/api/courses/${courseId}/ingest`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fileUrl: data.path, fileName: file.name }) });
  return data;
}
