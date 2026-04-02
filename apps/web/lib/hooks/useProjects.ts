"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

type Project = Database['public']['Tables']['projects']['Row'];

export function useProjects(courseId?: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchProjects = async () => {
      let query = supabase.from('projects').select('*');
      if (courseId) query = query.eq('course_id', courseId);
      const { data, error } = await query;
      if (error) setError(error.message);
      else setProjects(data ?? []);
      setLoading(false);
    };
    fetchProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return { projects, loading, error };
}
