// Edge Function: send notification when HiTL review is needed
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req: Request) => {
  const { gradeId, projectId, studentName } = await req.json();
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  // Find the instructor for this project
  const { data: project } = await supabase.from("projects").select("course_id, courses(instructor_id)").eq("id", projectId).single();
  const instructorId = (project as any)?.courses?.instructor_id;

  if (instructorId) {
    await supabase.from("notifications").insert({
      user_id: instructorId,
      title: `Grade review needed for ${studentName}`,
      body: `AI-generated grade requires your approval.`,
      type: "approval",
      link: `/instructor/approvals/${gradeId}`,
    });
  }

  return new Response(JSON.stringify({ notified: true }), { headers: { "Content-Type": "application/json" } });
});
