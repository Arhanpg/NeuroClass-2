"use client";
import { useState } from "react";

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [count] = useState(3);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">ðŸ””{count > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{count}</span>}</button>
      {open && <div className="absolute right-0 top-12 w-80 bg-white dark:bg-gray-900 border rounded-xl shadow-xl p-4 z-50"><h4 className="font-semibold mb-3">Notifications</h4>{/* NotificationItem list */}</div>}
    </div>
  );
}
