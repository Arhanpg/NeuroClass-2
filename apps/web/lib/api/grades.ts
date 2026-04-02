import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

const supabase = createClient();

type GradeInsert = Database['public']['Tables']['grades']['Insert'];
type GradeUpdate = Database['public']['Tables']['grades']['Update'];

export const getGrades = () => supabase.from("grades").select("*");
export const getGradesByProject = (projectId: string) => supabase.from("grades").select("*").eq("project_id", projectId);
export const getGradesByStudent = (studentId: string) => supabase.from("grades").select("*").eq("student_id", studentId);
export const createGrade = (grade: GradeInsert) => supabase.from("grades").insert(grade).select().single();
export const updateGrade = (id: string, updates: GradeUpdate) => supabase.from("grades").update(updates).eq("id", id);
export const deleteGrade = (id: string) => supabase.from("grades").delete().eq("id", id);
