"use client";
import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import type { UserRole } from "@neuroclass/shared-types";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const getUser = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user ?? null);
    setLoading(false);
  }, [supabase.auth]);

  useEffect(() => {
    getUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => { setUser(session?.user ?? null); }
    );
    return () => subscription.unsubscribe();
  }, [getUser, supabase.auth]);

  return { user, role, loading, supabase };
}
