import { UserProfile } from "utils/types";
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

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", "e3c283d6-29d4-4ec1-b30e-547178da662a")
    .single();

  if (!profile) return { data: null, error: profileError };

  const data: UserProfile = { user, profile };

  return { error: authError || profileError, data };
};
