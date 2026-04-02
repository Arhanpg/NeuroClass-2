// Edge Function: on new interaction â†’ call Cloud Run AI service
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req: Request) => {
  const { record } = await req.json();
  const { course_id, content, user_id, thread_id } = record;

  const aiServiceUrl = Deno.env.get("AI_SERVICE_URL")!;
  const res = await fetch(`${aiServiceUrl}/invoke`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ courseId: course_id, message: content, userId: user_id, threadId: thread_id }),
  });

  const data = await res.json();

  // Store AI response as new interaction
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  await supabase.from("interactions").insert({ user_id, course_id, thread_id, role: "ai", content: data.response });

  return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
});
