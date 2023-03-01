import { User } from "@supabase/supabase-js";
import { Database } from "supabase/schema";

export type Student = Database["public"]["Tables"]["students"]["Row"];
export type Teacher = Database["public"]["Tables"]["teachers"]["Row"];
export type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
export type Formation = Database["public"]["Tables"]["formations"]["Row"];

export type Form = Database["public"]["Tables"]["forms"]["Row"];
export type CreateForm = Database["public"]["Tables"]["forms"]["Insert"];

export type School = Database["public"]["Tables"]["schools"]["Row"];
export type CreateSchool = Database["public"]["Tables"]["schools"]["Insert"];

export type UserTeacher = { user: User; teacher: Teacher } | null;
export type StudentBoard = {
  schools: School[];
  forms: (Form & { schools: School; students: [{ count: number }] })[];
  students: (Student & { forms: Form })[];
};
