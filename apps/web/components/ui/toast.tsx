"use client";
import * as React from "react";
// Toast notification component â€” wraps @radix-ui/react-toast
export function Toaster() { return <div id="toast-container" />; }
export function toast({ title, description }: { title: string; description?: string }) { console.log(`Toast: ${title} â€” ${description}`); }
