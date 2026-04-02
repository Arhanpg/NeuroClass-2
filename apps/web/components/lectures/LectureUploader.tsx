"use client";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

export function LectureUploader() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  return (
    <div className="border-2 border-dashed rounded-xl p-8 text-center">
      <input type="file" accept=".pdf,.md,.txt" className="hidden" id="lecture-upload" />
      <label htmlFor="lecture-upload" className="cursor-pointer"><p className="text-lg font-medium">Upload Lecture Notes</p><p className="text-sm text-gray-400">PDF or Markdown files</p></label>
      {uploading && <Progress value={progress} className="mt-4" />}
    </div>
  );
}
