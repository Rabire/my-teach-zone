import { UserTeacher } from "utils/types";
import supabase from ".";

// TODO: register name #4
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
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
    .eq("id", "e3c283d6-29d4-4ec1-b30e-547178da662a")
    .single();

  if (!teacher) return { data: null, error: teacherError };

  const data: UserTeacher = { user, teacher };

  return { error: authError || teacherError, data };
};
