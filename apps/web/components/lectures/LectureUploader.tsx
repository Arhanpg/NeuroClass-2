"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { createClient } from "@/lib/supabase/client";

interface LectureUploaderProps {
  courseId: string;
  onSuccess?: (lectureId: string) => void;
}

export function LectureUploader({ courseId, onSuccess }: LectureUploaderProps) {
  const [_uploading, _setUploading] = useState(false);
  const [_progress, _setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      _setUploading(true);
      _setProgress(0);
      setError(null);
      try {
        const path = `${courseId}/${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage
          .from("lecture-materials")
          .upload(path, file);
        if (uploadError) throw uploadError;
        const { data: lecture, error: insertError } = await supabase
          .from("lectures")
          .insert({ course_id: courseId, title: file.name, storage_path: path, embedding_status: "PENDING" })
          .select("id")
          .single();
        if (insertError) throw insertError;
        _setProgress(100);
        onSuccess?.(lecture.id);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Upload failed");
      } finally {
        _setUploading(false);
      }
    },
    [courseId, onSuccess, supabase]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "text/plain": [".txt", ".md"] },
    maxFiles: 1,
  });

  return (
    <div className="space-y-3">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? "border-primary bg-accent" : "border-border hover:border-primary/50"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-muted-foreground">
          {isDragActive ? "Drop the file here" : "Drag & drop a PDF or text file, or click to select"}
        </p>
      </div>
      {_progress > 0 && _progress < 100 && <Progress value={_progress} />}
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button variant="outline" size="sm" {...getRootProps()}>
        Browse Files
      </Button>
    </div>
  );
}
