ALTER TABLE public.grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.released_grades ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view own grades" ON public.released_grades FOR SELECT USING (student_id = auth.uid());
CREATE POLICY "Instructors can view all grades for their courses" ON public.grades FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.projects p JOIN public.courses c ON p.course_id = c.id WHERE p.id = project_id AND c.instructor_id = auth.uid())
);
CREATE POLICY "Instructors can update grades" ON public.grades FOR UPDATE USING (
  EXISTS (SELECT 1 FROM public.projects p JOIN public.courses c ON p.course_id = c.id WHERE p.id = project_id AND c.instructor_id = auth.uid())
);
