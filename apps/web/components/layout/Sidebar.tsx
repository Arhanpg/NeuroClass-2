"use client";
import Link from "next/link";
import { useAuth } from "@/lib/hooks/useAuth";

const studentLinks = [
  { href: "/courses", label: "Courses", icon: "ðŸ“š" },
  { href: "/enroll", label: "Enroll", icon: "ðŸŽ«" },
  { href: "/settings", label: "Settings", icon: "âš™ï¸" },
];
const instructorLinks = [
  { href: "/courses", label: "Courses", icon: "ðŸ“š" },
  { href: "/instructor", label: "Dashboard", icon: "ðŸ“Š" },
  { href: "/instructor/approvals", label: "Approvals", icon: "âœ…" },
  { href: "/settings", label: "Settings", icon: "âš™ï¸" },
];

export function Sidebar() {
  const { role } = useAuth();
  const links = role === "INSTRUCTOR" ? instructorLinks : studentLinks;
  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-white dark:bg-gray-900 p-4 gap-1">
      <Link href="/" className="text-xl font-bold text-brand-500 mb-6 px-3">NeuroClass</Link>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm">{link.icon} {link.label}</Link>
      ))}
    </aside>
  );
}
