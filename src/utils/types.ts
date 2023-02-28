import { User } from "@supabase/supabase-js";
import { Database } from "supabase/schema";

export type Student = Database["public"]["Tables"]["students"]["Row"];

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type Class = Database["public"]["Tables"]["class"]["Row"]; // FIXME: rename to Form

export type Lesson = {
  id: number;
  name: string;
  //   owner: {}
};

export type Formation = {
  id: number;
  lesson: Lesson;
  form: Class;
  start: Date;
  end: Date;
};

export type UserProfile = { user: User; profile: Profile } | null;
