ALTER TABLE public.interactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own interactions" ON public.interactions FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert own interactions" ON public.interactions FOR INSERT WITH CHECK (user_id = auth.uid());
