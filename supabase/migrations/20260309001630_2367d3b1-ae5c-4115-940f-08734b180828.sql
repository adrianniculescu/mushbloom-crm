
CREATE TABLE public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service_interest TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact form
CREATE POLICY "Anyone can insert inquiries"
  ON public.contact_inquiries FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can read inquiries
CREATE POLICY "Authenticated users can read inquiries"
  ON public.contact_inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update inquiries
CREATE POLICY "Authenticated users can update inquiries"
  ON public.contact_inquiries FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete inquiries
CREATE POLICY "Authenticated users can delete inquiries"
  ON public.contact_inquiries FOR DELETE
  TO authenticated
  USING (true);
