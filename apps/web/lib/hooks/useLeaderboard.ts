"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

type LeaderboardEntry = Database['public']['Tables']['leaderboard_entries']['Row'];

export function useLeaderboard(courseId?: string) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchEntries = async () => {
      let query = supabase.from('leaderboard_entries').select('*');
      if (courseId) query = query.eq('course_id', courseId);
      const { data, error } = await query.order('points', { ascending: false });
      if (error) setError(error.message);
      else setEntries(data ?? []);
      setLoading(false);
    };
    fetchEntries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return { entries, loading, error };
}
