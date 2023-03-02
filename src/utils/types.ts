import { User } from "@supabase/supabase-js";
import { Database } from "supabase/schema";

export type Teacher = Database["public"]["Tables"]["teachers"]["Row"];
export type Formation = Database["public"]["Tables"]["formations"]["Row"];

export type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
export type CreateLesson = Database["public"]["Tables"]["lessons"]["Insert"];

export type Student = Database["public"]["Tables"]["students"]["Row"];
export type CreateStudent =
  Database["public"]["Tables"]["students"]["Insert"] & {
    forms?: Form;
  };

export type Form = Database["public"]["Tables"]["forms"]["Row"];
export type CreateForm = Database["public"]["Tables"]["forms"]["Insert"] & {
  schools?: School[];
  students?: (Student & { forms: Form })[];
};

export type School = Database["public"]["Tables"]["schools"]["Row"];
export type CreateSchool = Database["public"]["Tables"]["schools"]["Insert"];

export type UserTeacher = { user: User; teacher: Teacher } | null;

export type StudentBoardForm = Form & {
  schools: School;
  students: [{ count: number }];
};

export type LessonBoard = {
  lessons: Lesson[];
  formations: (Formation & { forms: Form; lessons: Lesson })[];
};

export type StudentBoard = {
  schools: School[];
  forms: StudentBoardForm[];
  students: (Student & { forms: Form })[];
};
