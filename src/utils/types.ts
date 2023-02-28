import { User } from "@supabase/supabase-js";
import { Database } from "supabase/schema";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type UserProfile = { user: User; profile: Profile } | null;
