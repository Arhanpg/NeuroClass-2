"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function useProjects(courseId: string) {
  const [projects, setProjects] = useState<any[]>([]);
  const supabase = createClient();
  useEffect(() => { supabase.from("projects").select("*").eq("course_id", courseId).then(({ data }) => setProjects(data ?? [])); }, [courseId]);
  return { projects };
}
