"use client";
import { useRealtime } from "./useRealtime";

export function useLeaderboard(courseId: string) {
  const entries = useRealtime<{ user_id: string; rank: number; score: number }>("leaderboard", `course_id=eq.${courseId}`);
  return { entries };
}
