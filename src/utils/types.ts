import { User } from "@supabase/supabase-js";

export type UserProfile = { user: User; profile: { name: any } } | null;
