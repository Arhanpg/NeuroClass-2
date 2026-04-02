-- Student-visible grades (only populated after approval)
CREATE TABLE public.released_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  grade_id UUID NOT NULL UNIQUE REFERENCES public.grades(id),
  student_id UUID NOT NULL REFERENCES public.profiles(id),
  project_id UUID NOT NULL REFERENCES public.projects(id),
  total NUMERIC(5,2) NOT NULL,
  letter_grade TEXT,
  released_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_released_student ON public.released_grades(student_id);
