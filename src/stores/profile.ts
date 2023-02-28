import { atom } from "nanostores";
import type { UserProfile } from "utils/types";

export const userProfileStore = atom<UserProfile | null>(null);

export const setUserProfile = (newUserProfile: UserProfile) => {
  userProfileStore.set(newUserProfile);
};
