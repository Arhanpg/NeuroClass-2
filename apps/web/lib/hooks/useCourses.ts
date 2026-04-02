"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function useCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => { supabase.from("courses").select("*").then(({ data }) => { setCourses(data ?? []); setLoading(false); }); }, []);

  const createCourse = async (course: any) => { const { data, error } = await supabase.from("courses").insert(course).select().single(); return { data, error }; };
  const enrollByCode = async (joinCode: string) => { /* lookup course by join_code then insert enrollment */ };

  return { courses, loading, createCourse, enrollByCode };
}
