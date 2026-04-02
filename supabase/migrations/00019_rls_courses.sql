ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Instructors can create courses" ON public.courses FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'INSTRUCTOR')
);
CREATE POLICY "Instructors can update own courses" ON public.courses FOR UPDATE USING (instructor_id = auth.uid());
