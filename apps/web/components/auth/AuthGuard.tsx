"use client";
import { useAuth } from "@/lib/hooks/useAuth";
import { redirect } from "next/navigation";
import type { UserRole } from "@neuroclass/shared-types";

export function AuthGuard({ children, allowedRoles }: { children: React.ReactNode; allowedRoles?: UserRole[] }) {
  const { user, role, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!user) redirect("/login");
  if (allowedRoles && !allowedRoles.includes(role!)) redirect("/");
  return <>{children}</>;
}
