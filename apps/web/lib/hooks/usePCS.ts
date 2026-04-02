"use client";
import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface PCSEntry {
  userId: string;
  courseId: string;
  score: number;
  percentile: number;
}

export function usePCS(courseId: string) {
  const [data, setData] = useState<PCSEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [_scores, _setScores] = useState<number[]>([]);
  // Keep a stable ref to the supabase client so it never triggers re-renders
  const supabaseRef = useRef(createClient());

  useEffect(() => {
    if (!courseId) return;
    const supabase = supabaseRef.current;

    const fetchPCS = async () => {
      const { data: pcsData } = await supabase
        .from("leaderboard_entries")
        .select("student_id, course_id, points, rank")
        .eq("course_id", courseId)
        .order("points", { ascending: false });

      if (pcsData && pcsData.length > 0) {
        const allScores = pcsData.map((r) => r.points as number);
        _setScores(allScores);
        const topEntry = pcsData[0];
        setData({
          userId: topEntry.student_id as string,
          courseId: topEntry.course_id as string,
          score: topEntry.points as number,
          percentile: 100,
        });
      }
      setLoading(false);
    };

    fetchPCS();
  }, [courseId]);

  return { data, loading };
}
