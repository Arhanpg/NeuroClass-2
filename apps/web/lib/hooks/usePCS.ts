"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function usePCS(projectId: string) {
  const [scores, setScores] = useState<{ member: string; score: number }[]>([]);
  const supabase = createClient();
  useEffect(() => { /* fetch PCS data for project */ }, [projectId]);
  return { scores };
}
