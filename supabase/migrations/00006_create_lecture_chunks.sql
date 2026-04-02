-- pgvector table for lecture content embeddings
CREATE TABLE public.lecture_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lecture_id UUID NOT NULL REFERENCES public.lectures(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  chunk_index INTEGER NOT NULL,
  embedding extensions.vector(768),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_chunks_lecture ON public.lecture_chunks(lecture_id);
CREATE INDEX idx_chunks_course ON public.lecture_chunks(course_id);
CREATE INDEX idx_chunks_embedding ON public.lecture_chunks USING ivfflat (embedding extensions.vector_cosine_ops) WITH (lists = 100);
