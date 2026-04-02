-- RPC function for pgvector cosine similarity search
CREATE OR REPLACE FUNCTION public.match_lecture_chunks(
  query_embedding extensions.vector(768),
  match_count INT DEFAULT 5,
  filter_course_id UUID DEFAULT NULL
)
RETURNS TABLE (id UUID, content TEXT, similarity FLOAT)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT lc.id, lc.content, 1 - (lc.embedding <=> query_embedding) AS similarity
  FROM public.lecture_chunks lc
  WHERE (filter_course_id IS NULL OR lc.course_id = filter_course_id)
  ORDER BY lc.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
