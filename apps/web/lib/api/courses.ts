import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export const getCourses = () => supabase.from("courses").select("*");
export const getCourseById = (id: string) => supabase.from("courses").select("*").eq("id", id).single();
export const createCourse = (course: any) => supabase.from("courses").insert(course).select().single();
export const updateCourse = (id: string, updates: any) => supabase.from("courses").update(updates).eq("id", id);
export const deleteCourse = (id: string) => supabase.from("courses").delete().eq("id", id);
