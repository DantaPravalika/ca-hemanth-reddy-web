-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

create table if not exists reviews (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  role       text,
  text       text not null,
  rating     smallint not null check (rating between 1 and 5),
  status     text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

-- Index for the public query (approved reviews sorted by rating/date)
create index if not exists idx_reviews_approved
  on reviews (status, rating desc, created_at desc)
  where status = 'approved';

-- Row Level Security: anon users can only INSERT and read approved rows
alter table reviews enable row level security;

create policy "Anyone can submit a review"
  on reviews for insert
  to anon
  with check (true);

create policy "Anyone can read approved reviews"
  on reviews for select
  to anon
  using (status = 'approved');

-- Service role bypasses RLS, so admin API routes can read/update all rows.
