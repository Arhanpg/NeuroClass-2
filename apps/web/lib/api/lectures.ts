import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

const supabase = createClient();

type LectureInsert = Database['public']['Tables']['lectures']['Insert'];
type LectureUpdate = Database['public']['Tables']['lectures']['Update'];

export const getLectures = (courseId: string) => supabase.from("lectures").select("*").eq("course_id", courseId).order("order_index");
export const getLectureById = (id: string) => supabase.from("lectures").select("*").eq("id", id).single();
export const createLecture = (lecture: LectureInsert) => supabase.from("lectures").insert(lecture).select().single();
export const updateLecture = (id: string, updates: LectureUpdate) => supabase.from("lectures").update(updates).eq("id", id);
export const deleteLecture = (id: string) => supabase.from("lectures").delete().eq("id", id);
