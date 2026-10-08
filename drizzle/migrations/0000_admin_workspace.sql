create type public.app_role as enum ('admin', 'client');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create or replace function public.assign_admin_role()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if lower(new.email) = 'adrian@mushbloom.co.uk' then
    insert into public.user_roles(user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;
create trigger on_auth_user_created_assign_admin after insert on auth.users
  for each row execute function public.assign_admin_role();
insert into public.user_roles(user_id, role)
  select id, 'admin' from auth.users where lower(email) = 'adrian@mushbloom.co.uk' on conflict do nothing;

-- Lock existing CMS data to admin
drop policy "Authenticated users can delete inquiries" on public.contact_inquiries;
drop policy "Authenticated users can update inquiries" on public.contact_inquiries;
drop policy "Authenticated users can read inquiries" on public.contact_inquiries;
create policy "Admins read inquiries" on public.contact_inquiries for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "Admins update inquiries" on public.contact_inquiries for update to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "Admins delete inquiries" on public.contact_inquiries for delete to authenticated using (public.has_role(auth.uid(),'admin'));
drop policy "Authenticated can delete posts" on public.cms_posts;
drop policy "Authenticated can update posts" on public.cms_posts;
drop policy "Authenticated can insert posts" on public.cms_posts;
drop policy "Authenticated can read all posts" on public.cms_posts;
create policy "Admins manage posts" on public.cms_posts for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create or replace function public.touch_updated_at() returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end $$;

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text,
  website text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.clients to authenticated;
grant all on public.clients to service_role;
alter table public.clients enable row level security;
create policy "Admins manage clients" on public.clients for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger clients_touch before update on public.clients for each row execute function public.touch_updated_at();

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete cascade,
  inquiry_id uuid references public.contact_inquiries(id) on delete set null,
  title text not null,
  area text,
  status text not null default 'intake',
  brief text,
  diagnosis text,
  diagnosis_approved boolean not null default false,
  approved_at timestamptz,
  milestones text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.projects to authenticated;
grant all on public.projects to service_role;
alter table public.projects enable row level security;
create policy "Admins manage projects" on public.projects for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger projects_touch before update on public.projects for each row execute function public.touch_updated_at();

create table public.knowledge_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'notes',
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.knowledge_items to authenticated;
grant all on public.knowledge_items to service_role;
alter table public.knowledge_items enable row level security;
create policy "Admins manage knowledge" on public.knowledge_items for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger knowledge_touch before update on public.knowledge_items for each row execute function public.touch_updated_at();

create table public.ai_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  project_id uuid references public.projects(id) on delete set null,
  tool text not null,
  input text not null,
  output text,
  status text not null default 'done',
  created_at timestamptz not null default now()
);
grant select, delete on public.ai_runs to authenticated;
grant all on public.ai_runs to service_role;
alter table public.ai_runs enable row level security;
create policy "Admins read ai runs" on public.ai_runs for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "Admins delete ai runs" on public.ai_runs for delete to authenticated using (public.has_role(auth.uid(),'admin'));

insert into public.knowledge_items(title, category, content) values
('Positioning', 'company', 'Mushbloom is an international no-code AI automation agency (operating since 2014) for SMEs and owner-run businesses. Promise: Tell us what is slowing your business down. We map the workflow, identify what can be automated, and build the system that makes it work better. We sell business results, not access to AI agents.'),
('Service packages', 'services', 'Automation Discovery (workflow review, bottleneck map, opportunities, recommended tools, prioritised plan). Automation Blueprint (architecture, integration plan, agent specs, security & approval model, roadmap, ROI assumptions). Build and Implement (configuration, automations, internal tools/agents, testing, docs, training, support). AI Operations Partner (monitoring, improvements, new automations, reporting, quarterly review). Price is based on complexity, value, risk, integrations and support. Other services: AI Workforce Systems, AI Workflows, LinkedIn Sales Machine, LLMboost, Newswire, Lovable development, lead generation data.'),
('Approval rules', 'policy', 'Human approval is required before sending emails, publishing content, deploying code, changing production data, legal documents, connecting accounts, spending money or investor communications. Never place secrets in prompts. Client data is never shared between clients.');