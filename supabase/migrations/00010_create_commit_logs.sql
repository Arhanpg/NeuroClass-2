CREATE TABLE public.commit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  team_id UUID REFERENCES public.teams(id),
  author_github TEXT NOT NULL,
  author_user_id UUID REFERENCES public.profiles(id),
  sha TEXT NOT NULL UNIQUE,
  message TEXT NOT NULL,
  lines_added INTEGER DEFAULT 0,
  lines_deleted INTEGER DEFAULT 0,
  complexity TEXT DEFAULT 'low' CHECK (complexity IN ('low', 'medium', 'high')),
  committed_at TIMESTAMPTZ NOT NULL,
  synced_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_commits_project ON public.commit_logs(project_id);
