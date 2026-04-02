"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function GitHubLinkForm() {
  const [url, setUrl] = useState("");
  return (
    <form className="flex gap-2">
      <Input placeholder="https://github.com/user/repo" value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1" />
      <Button type="submit">Link Repo</Button>
    </form>
  );
}
