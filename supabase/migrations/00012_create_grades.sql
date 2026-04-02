CREATE TABLE public.grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.profiles(id),
  project_id UUID NOT NULL REFERENCES public.projects(id),
  rubric_id UUID NOT NULL REFERENCES public.rubrics(id),
  scores JSONB NOT NULL DEFAULT '{}',
  total NUMERIC(5,2) DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED', 'OVERRIDDEN')),
  ai_justification TEXT DEFAULT '',
  instructor_notes TEXT,
  graded_at TIMESTAMPTZ DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  UNIQUE(student_id, project_id)
);

CREATE INDEX idx_grades_student ON public.grades(student_id);
CREATE INDEX idx_grades_project ON public.grades(project_id);
CREATE INDEX idx_grades_status ON public.grades(status);
