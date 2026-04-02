"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface RubricEditorProps {
  initialJson?: string;
  onChange?: (json: string) => void;
}

export function RubricEditor({ initialJson = "{}", onChange }: RubricEditorProps) {
  const [value, setValue] = useState(initialJson);
  const [_jsonPreview, setJsonPreview] = useState<object | null>(null);

  const handleChange = (v: string) => {
    setValue(v);
    try {
      const parsed = JSON.parse(v);
      setJsonPreview(parsed);
      onChange?.(v);
    } catch {
      // invalid JSON — ignore preview update
    }
  };

  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        rows={12}
        className="font-mono text-sm"
        placeholder="Enter rubric JSON..."
      />
      <Button variant="outline" size="sm" onClick={() => handleChange(JSON.stringify(JSON.parse(value), null, 2))}>
        Format JSON
      </Button>
    </div>
  );
}
