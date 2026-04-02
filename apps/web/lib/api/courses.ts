import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

const supabase = createClient();

type CourseInsert = Database['public']['Tables']['courses']['Insert'];
type CourseUpdate = Database['public']['Tables']['courses']['Update'];

export const getCourses = () => supabase.from("courses").select("*");
export const getCourseById = (id: string) => supabase.from("courses").select("*").eq("id", id).single();
export const createCourse = (course: CourseInsert) => supabase.from("courses").insert(course).select().single();
export const updateCourse = (id: string, updates: CourseUpdate) => supabase.from("courses").update(updates).eq("id", id);
export const deleteCourse = (id: string) => supabase.from("courses").delete().eq("id", id);
