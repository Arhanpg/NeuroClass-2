"use client";
import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

/**
 * Overload 1: callback-based usage
 *   useRealtime('channel-name', (payload) => { ... })
 *
 * Overload 2: state-based usage with generic + filter string
 *   const entries = useRealtime<MyType>('table-name', 'col=eq.val')
 */
export function useRealtime<T = unknown>(
  channel: string,
  callbackOrFilter?: ((payload: unknown) => void) | string
): T[] {
  const supabase = createClient();
  const channelRef = useRef<RealtimeChannel | null>(null);
  const [data, setData] = useState<T[]>([]);

  // Determine mode: if second arg is a function → callback mode, else filter/state mode
  const isCallbackMode = typeof callbackOrFilter === 'function';
  const callbackRef = useRef(isCallbackMode ? callbackOrFilter : undefined);
  if (isCallbackMode) callbackRef.current = callbackOrFilter as (payload: unknown) => void;

  useEffect(() => {
    channelRef.current = supabase
      .channel(channel)
      .on(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        'postgres_changes' as any,
        { event: '*', schema: 'public' },
        (payload: unknown) => {
          if (isCallbackMode) {
            callbackRef.current?.(payload);
          } else {
            // state mode: accumulate new/changed records
            const p = payload as { eventType?: string; new?: T; old?: T };
            if (p.eventType === 'INSERT' && p.new) {
              setData((prev) => [...prev, p.new as T]);
            } else if (p.eventType === 'UPDATE' && p.new) {
              setData((prev) =>
                prev.map((item) => {
                  const i = item as Record<string, unknown>;
                  const n = p.new as Record<string, unknown>;
                  return i['id'] === n['id'] ? (p.new as T) : item;
                })
              );
            } else if (p.eventType === 'DELETE' && p.old) {
              setData((prev) =>
                prev.filter((item) => {
                  const i = item as Record<string, unknown>;
                  const o = p.old as Record<string, unknown>;
                  return i['id'] !== o['id'];
                })
              );
            }
          }
        }
      )
      .subscribe();

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  return data;
}
