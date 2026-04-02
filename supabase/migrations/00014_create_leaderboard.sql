CREATE TABLE public.leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses(id),
  user_id UUID NOT NULL REFERENCES public.profiles(id),
  rank INTEGER NOT NULL,
  score NUMERIC(5,2) NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(course_id, user_id)
);

ALTER TABLE public.leaderboard REPLICA IDENTITY FULL;  -- Enable Realtime
CREATE INDEX idx_leaderboard_course ON public.leaderboard(course_id, rank);
