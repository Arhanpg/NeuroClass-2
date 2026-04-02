"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { RubricValidator } from "./RubricValidator";

export function RubricEditor() {
  const [nlInput, setNlInput] = useState("");
  const [jsonPreview, setJsonPreview] = useState("");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div><h3 className="font-semibold mb-2">Natural Language Input</h3><Textarea value={nlInput} onChange={(e) => setNlInput(e.target.value)} placeholder="Describe your rubric criteria..." rows={12} /></div>
      <div><h3 className="font-semibold mb-2">JSON Preview</h3><pre className="p-4 rounded-lg bg-gray-950 text-green-400 text-sm overflow-auto h-72">{jsonPreview || "// Rubric JSON will appear here"}</pre><RubricValidator json={jsonPreview} /></div>
    </div>
  );
}
