CREATE TABLE public.rubrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses(id),
  project_id UUID NOT NULL REFERENCES public.projects(id),
  criteria JSONB NOT NULL DEFAULT '[]',
  created_by UUID NOT NULL REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_rubrics_project ON public.rubrics(project_id);
