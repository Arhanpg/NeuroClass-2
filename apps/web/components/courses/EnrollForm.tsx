"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EnrollForm() {
  const [joinCode, setJoinCode] = useState("");
  return (
    <form className="space-y-4">
      <Input placeholder="Enter join code" value={joinCode} onChange={(e) => setJoinCode(e.target.value)} maxLength={8} className="text-center text-2xl tracking-widest" />
      <Button type="submit" className="w-full">Enroll</Button>
    </form>
  );
}
