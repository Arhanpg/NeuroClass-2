"use client";
import { ThemeToggle } from "./ThemeToggle";
import { NotificationBell } from "@/components/notifications/NotificationBell";

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-6 border-b bg-white dark:bg-gray-900">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex items-center gap-4">
        <NotificationBell />
        <ThemeToggle />
        <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm font-bold">U</div>
      </div>
    </header>
  );
}
