create table "public"."marathons" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text,
    "thumbnail_url" text,
    "promoter" text,
    "starting_date" date,
    "ending_date" date,
    "price" real not null default '0'::real,
    "tracks" text[],
    "description" text
);


alter table "public"."marathons" enable row level security;

CREATE UNIQUE INDEX marathons_pkey ON public.marathons USING btree (id);

alter table "public"."marathons" add constraint "marathons_pkey" PRIMARY KEY using index "marathons_pkey";

grant delete on table "public"."marathons" to "anon";

grant insert on table "public"."marathons" to "anon";

grant references on table "public"."marathons" to "anon";

grant select on table "public"."marathons" to "anon";

grant trigger on table "public"."marathons" to "anon";

grant truncate on table "public"."marathons" to "anon";

grant update on table "public"."marathons" to "anon";

grant delete on table "public"."marathons" to "authenticated";

grant insert on table "public"."marathons" to "authenticated";

grant references on table "public"."marathons" to "authenticated";

grant select on table "public"."marathons" to "authenticated";

grant trigger on table "public"."marathons" to "authenticated";

grant truncate on table "public"."marathons" to "authenticated";

grant update on table "public"."marathons" to "authenticated";

grant delete on table "public"."marathons" to "service_role";

grant insert on table "public"."marathons" to "service_role";

grant references on table "public"."marathons" to "service_role";

grant select on table "public"."marathons" to "service_role";

grant trigger on table "public"."marathons" to "service_role";

grant truncate on table "public"."marathons" to "service_role";

grant update on table "public"."marathons" to "service_role";

create policy "Enable read access for all users"
on "public"."marathons"
as permissive
for select
to public
using (true);



