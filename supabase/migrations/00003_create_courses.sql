CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  instructor_id UUID NOT NULL REFERENCES public.profiles(id),
  join_code TEXT NOT NULL UNIQUE DEFAULT substring(md5(random()::text) FROM 1 FOR 8),
  pedagogy TEXT NOT NULL DEFAULT 'SOCRATIC' CHECK (pedagogy IN ('SOCRATIC', 'SCAFFOLDED', 'DIRECT', 'PROJECT_BASED')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_courses_instructor ON public.courses(instructor_id);
