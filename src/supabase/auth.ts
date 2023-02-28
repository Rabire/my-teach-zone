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
    error,
  } = await supabase.auth.getUser();

  // supabase.from("students").select().then(console.log);

  const data: UserProfile = user && { user, profile: { name: " oui mec " } };

  return { error, data };
};
