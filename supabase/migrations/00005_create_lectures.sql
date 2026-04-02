CREATE TABLE public.lectures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  file_url TEXT,
  file_type TEXT CHECK (file_type IN ('pdf', 'markdown', 'txt')),
  status TEXT DEFAULT 'uploaded' CHECK (status IN ('uploaded', 'processing', 'embedded', 'failed')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_lectures_course ON public.lectures(course_id);
