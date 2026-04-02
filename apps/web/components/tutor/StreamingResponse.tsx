"use client";
import { useState, useEffect } from "react";

export function StreamingResponse({ text, speed = 20 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => { let i = 0; const interval = setInterval(() => { if (i < text.length) { setDisplayed(text.slice(0, ++i)); } else clearInterval(interval); }, speed); return () => clearInterval(interval); }, [text, speed]);
  return <span>{displayed}<span className="animate-pulse">â–Š</span></span>;
}
