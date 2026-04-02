"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

type Grade = Database['public']['Tables']['grades']['Row'];

export function useGrades(projectId?: string) {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchGrades = async () => {
      let query = supabase.from('grades').select('*');
      if (projectId) query = query.eq('project_id', projectId);
      const { data, error } = await query;
      if (error) setError(error.message);
      else setGrades(data ?? []);
      setLoading(false);
    };
    fetchGrades();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  return { grades, loading, error };
}
