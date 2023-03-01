import { User } from "@supabase/supabase-js";
import { Database } from "supabase/schema";

export type Student = Database["public"]["Tables"]["students"]["Row"];
export type Teacher = Database["public"]["Tables"]["teachers"]["Row"];
export type Form = Database["public"]["Tables"]["forms"]["Row"];
export type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
export type Formation = Database["public"]["Tables"]["formations"]["Row"];

export type UserTeacher = { user: User; teacher: Teacher } | null;
