import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

const supabase = createClient();

type ProjectInsert = Database['public']['Tables']['projects']['Insert'];
type ProjectUpdate = Database['public']['Tables']['projects']['Update'];

export const getProjects = (courseId: string) => supabase.from("projects").select("*").eq("course_id", courseId);
export const getProjectById = (id: string) => supabase.from("projects").select("*").eq("id", id).single();
export const createProject = (project: ProjectInsert) => supabase.from("projects").insert(project).select().single();
export const updateProject = (id: string, updates: ProjectUpdate) => supabase.from("projects").update(updates).eq("id", id);
export const deleteProject = (id: string) => supabase.from("projects").delete().eq("id", id);
