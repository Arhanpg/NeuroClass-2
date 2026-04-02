"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

type Course = Database['public']['Tables']['courses']['Row'];

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) setError(error.message);
      else setCourses(data ?? []);
      setLoading(false);
    };
    fetchCourses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { courses, loading, error };
}
