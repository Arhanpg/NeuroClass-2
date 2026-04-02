"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form className="space-y-4">
      <Input placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea placeholder="Description & requirements" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button type="submit" className="w-full">Create Project</Button>
    </form>
  );
}
