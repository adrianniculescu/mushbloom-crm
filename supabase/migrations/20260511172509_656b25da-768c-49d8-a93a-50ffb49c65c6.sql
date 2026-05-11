CREATE TABLE public.cms_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT,
  excerpt TEXT,
  content TEXT NOT NULL DEFAULT '',
  cover_image_url TEXT,
  read_time TEXT,
  seo_keywords TEXT,
  meta_title TEXT,
  meta_description TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.cms_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published posts"
  ON public.cms_posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Authenticated can read all posts"
  ON public.cms_posts FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Authenticated can insert posts"
  ON public.cms_posts FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated can update posts"
  ON public.cms_posts FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated can delete posts"
  ON public.cms_posts FOR DELETE
  TO authenticated USING (true);

CREATE OR REPLACE FUNCTION public.cms_posts_set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER cms_posts_updated_at
BEFORE UPDATE ON public.cms_posts
FOR EACH ROW EXECUTE FUNCTION public.cms_posts_set_updated_at();

CREATE INDEX idx_cms_posts_status_published_at ON public.cms_posts(status, published_at DESC);