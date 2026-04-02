-- LangGraph state persistence
CREATE TABLE public.checkpointer (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID NOT NULL,
  state JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_checkpointer_thread ON public.checkpointer(thread_id, created_at DESC);
