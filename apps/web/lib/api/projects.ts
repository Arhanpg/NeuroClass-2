import { createClient } from "@/lib/supabase/client";
const supabase = createClient();
export const getProjects = (courseId: string) => supabase.from("projects").select("*, teams(*)").eq("course_id", courseId);
export const createProject = (project: any) => supabase.from("projects").insert(project).select().single();
export const createTeam = (team: any) => supabase.from("teams").insert(team).select().single();
