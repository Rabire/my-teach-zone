import { RegisterInputs } from "pages/Register";
import { UserTeacher } from "utils/types";
import supabase from ".";

export const signUp = async (inputs: RegisterInputs) => {
  const { data, error } = await supabase.auth.signUp({
    email: inputs.email,
    password: inputs.password,
    options: {
      emailRedirectTo: "https://my-teach-zone.vercel.app/",
    },
  });

  const { error: createTeacherError } = await supabase
    .from("teachers")
    .insert({ id: data?.user?.id || "", name: inputs.name });

  return { data, error: error || createTeacherError };
};

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

export const getMe = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user) return { data: null, error: authError };

  const { data: teacher, error: teacherError } = await supabase
    .from("teachers")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!teacher) return { data: null, error: teacherError };

  const data: UserTeacher = { user, teacher };

  return { error: authError || teacherError, data };
};
