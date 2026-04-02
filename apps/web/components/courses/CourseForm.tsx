"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PedagogySelector } from "./PedagogySelector";

export function CourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pedagogy, setPedagogy] = useState("SOCRATIC");

  return (
    <form className="space-y-4">
      <Input placeholder="Course Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <PedagogySelector value={pedagogy} onChange={setPedagogy} />
      <Button type="submit" className="w-full">Create Course</Button>
    </form>
  );
}
