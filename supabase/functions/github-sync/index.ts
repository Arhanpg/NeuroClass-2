// Edge Function: scheduled GitHub commit sync
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (_req: Request) => {
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const githubToken = Deno.env.get("GITHUB_TOKEN")!;

  // Fetch all projects with GitHub URLs
  const { data: projects } = await supabase.from("projects").select("id, github_url").not("github_url", "is", null);

  for (const project of projects || []) {
    // Parse owner/repo from URL, fetch new commits, store in commit_logs
    console.log(`Syncing commits for project ${project.id}`);
  }

  return new Response(JSON.stringify({ synced: projects?.length || 0 }), { headers: { "Content-Type": "application/json" } });
});
