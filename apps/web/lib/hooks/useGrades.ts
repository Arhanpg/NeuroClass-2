"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function useGrades(projectId?: string) {
  const [grades, setGrades] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    let query = supabase.from("grades").select("*");
    if (projectId) query = query.eq("project_id", projectId);
    query.then(({ data }) => setGrades(data ?? []));
  }, [projectId]);

  const approveGrade = async (gradeId: string) => supabase.from("grades").update({ status: "APPROVED" }).eq("id", gradeId);
  const rejectGrade = async (gradeId: string) => supabase.from("grades").update({ status: "REJECTED" }).eq("id", gradeId);

  return { grades, approveGrade, rejectGrade };
}
