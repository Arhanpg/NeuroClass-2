ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enrolled users can view leaderboard" ON public.leaderboard FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.enrollments WHERE user_id = auth.uid() AND course_id = leaderboard.course_id)
  OR EXISTS (SELECT 1 FROM public.courses WHERE id = leaderboard.course_id AND instructor_id = auth.uid())
);
