"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

export function useRealtime<T>(table: string, filter?: string) {
  const [data, setData] = useState<T[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const channel: RealtimeChannel = supabase.channel(`${table}_changes`)
      .on("postgres_changes", { event: "*", schema: "public", table, filter }, (payload) => {
        setData((prev) => [...prev, payload.new as T]);
      }).subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [table, filter]);

  return data;
}
