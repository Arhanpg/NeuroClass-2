import { createClient } from "@/lib/supabase/client";
const supabase = createClient();
export const getGrades = (projectId: string) => supabase.from("grades").select("*").eq("project_id", projectId);
export const approveGrade = (gradeId: string, notes?: string) => supabase.from("grades").update({ status: "APPROVED", instructor_notes: notes }).eq("id", gradeId);
export const overrideGrade = (gradeId: string, scores: any, notes: string) => supabase.from("grades").update({ scores, status: "OVERRIDDEN", instructor_notes: notes }).eq("id", gradeId);
export const rejectGrade = (gradeId: string, notes: string) => supabase.from("grades").update({ status: "REJECTED", instructor_notes: notes }).eq("id", gradeId);
