-- ─────────────────────────────────────────────────────────────────
-- Add image_position + content_position to existing CMS tables
-- ─────────────────────────────────────────────────────────────────
ALTER TABLE blog_posts   ADD COLUMN IF NOT EXISTS image_position   text DEFAULT 'top';
ALTER TABLE blog_posts   ADD COLUMN IF NOT EXISTS content_position text DEFAULT 'left';
ALTER TABLE projects     ADD COLUMN IF NOT EXISTS image_position   text DEFAULT 'top';
ALTER TABLE projects     ADD COLUMN IF NOT EXISTS content_position text DEFAULT 'left';
ALTER TABLE products     ADD COLUMN IF NOT EXISTS image_position   text DEFAULT 'top';
ALTER TABLE products     ADD COLUMN IF NOT EXISTS content_position text DEFAULT 'left';
ALTER TABLE services     ADD COLUMN IF NOT EXISTS image_position   text DEFAULT 'top';
ALTER TABLE services     ADD COLUMN IF NOT EXISTS content_position text DEFAULT 'left';

-- ─────────────────────────────────────────────────────────────────
-- Agri Startup Programs table
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS agri_startup_programs (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title            text NOT NULL,
  tagline          text,
  description      text,
  cover_url        text,
  image_position   text DEFAULT 'top',
  content_position text DEFAULT 'left',
  icon             text,
  color            text DEFAULT '#1A4231',
  status           text DEFAULT 'published',
  sort_order       int  DEFAULT 0,
  updated_at       timestamptz DEFAULT now()
);
ALTER TABLE agri_startup_programs ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Public Read Agri Startup Programs" ON agri_startup_programs FOR SELECT USING (status = 'published');
EXCEPTION WHEN OTHERS THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Admin All Agri Startup Programs" ON agri_startup_programs FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
EXCEPTION WHEN OTHERS THEN NULL; END $$;

-- ─────────────────────────────────────────────────────────────────
-- IGO Academy Courses table
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS academy_courses (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title            text NOT NULL,
  slug             text UNIQUE NOT NULL,
  description      text,
  full_content     text,
  cover_url        text,
  image_position   text DEFAULT 'top',
  content_position text DEFAULT 'left',
  duration         text,
  price_label      text,
  category         text DEFAULT 'professional',
  status           text DEFAULT 'published',
  sort_order       int  DEFAULT 0,
  created_at       timestamptz DEFAULT now(),
  updated_at       timestamptz DEFAULT now()
);
ALTER TABLE academy_courses ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Public Read Academy Courses" ON academy_courses FOR SELECT USING (status = 'published');
EXCEPTION WHEN OTHERS THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Admin All Academy Courses" ON academy_courses FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
EXCEPTION WHEN OTHERS THEN NULL; END $$;
