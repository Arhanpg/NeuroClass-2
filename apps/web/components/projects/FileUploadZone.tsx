"use client";
import { useState, useCallback } from "react";

export function FileUploadZone() {
  const [isDragging, setIsDragging] = useState(false);
  const onDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); /* handle files */ }, []);
  return (
    <div onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)} onDrop={onDrop}
      className={`border-2 border-dashed rounded-xl p-12 text-center transition ${isDragging ? "border-brand-500 bg-brand-50 dark:bg-brand-900/10" : "border-gray-300"}`}>
      <p className="text-lg font-medium">Drop ZIP file or click to upload</p>
      <p className="text-sm text-gray-400 mt-1">Or paste a GitHub repository URL</p>
    </div>
  );
}
