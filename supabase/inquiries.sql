-- All For You website: inquiries table. Paste into Supabase > SQL Editor > New query > Run.
create table if not exists public.inquiries (
  id         bigint generated always as identity primary key,
  name       text not null check (char_length(name) between 1 and 120),
  phone      text check (char_length(phone) <= 40),
  email      text check (char_length(email) <= 200),
  interest   text not null default 'other' check (interest in ('homes', 'training', 'other')),
  message    text check (char_length(message) <= 4000),
  created_at timestamptz not null default now(),
  constraint phone_or_email check (phone is not null or email is not null)
);

alter table public.inquiries enable row level security;

-- The website (anon key) may only INSERT. No select, update or delete for anon.
drop policy if exists "anon can insert inquiries" on public.inquiries;
create policy "anon can insert inquiries"
  on public.inquiries for insert
  to anon
  with check (true);

revoke all on public.inquiries from anon;
grant insert (name, phone, email, interest, message) on public.inquiries to anon;

-- Read inquiries in the Supabase dashboard (Table Editor), which uses the service role.
