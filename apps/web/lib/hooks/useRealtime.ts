"use client";
import { useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

export function useRealtime(channel: string, callback: (payload: unknown) => void) {
  const supabase = createClient();
  const channelRef = useRef<RealtimeChannel | null>(null);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    channelRef.current = supabase
      .channel(channel)
      .on('postgres_changes' as never, { event: '*', schema: 'public' }, (payload) => {
        callbackRef.current(payload);
      })
      .subscribe();

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);
}
