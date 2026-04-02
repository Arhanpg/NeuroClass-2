"use client";
import { useEffect } from "react";
export function CelebrationOverlay({ show }: { show: boolean }) {
  useEffect(() => { if (show) { /* trigger canvas-confetti */ } }, [show]);
  if (!show) return null;
  return <div className="fixed inset-0 pointer-events-none z-50">{/* confetti particles */}</div>;
}
