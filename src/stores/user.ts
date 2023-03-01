import { atom } from "nanostores";
import type { UserTeacher } from "utils/types";

export const userTeacherStore = atom<UserTeacher | null>(null);

export const setUserTeacher = (newUserTeacher: UserTeacher) => {
  userTeacherStore.set(newUserTeacher);
};
