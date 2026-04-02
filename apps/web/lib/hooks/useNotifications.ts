"use client";
import { useRealtime } from "./useRealtime";

export function useNotifications(userId: string) {
  const notifications = useRealtime<{ id: string; title: string; read: boolean }>("notifications", `user_id=eq.${userId}`);
  return { notifications };
}
