CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  due_date TIMESTAMPTZ,
  github_url TEXT,
  max_team_size INTEGER DEFAULT 4,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_projects_course ON public.projects(course_id);
