"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/types";

type Notification = Database['public']['Tables']['notifications']['Row'];

export function useNotifications(userId?: string) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) setError(error.message);
      else setNotifications(data ?? []);
      setLoading(false);
    };
    fetchNotifications();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return { notifications, loading, error };
}
