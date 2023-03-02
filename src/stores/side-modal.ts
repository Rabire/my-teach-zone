import { atom } from "nanostores";

type Content =
  | "none"
  | "write-schools"
  | "write-forms"
  | "write-students"
  | "write-lessons"
  | "write-formation";

export const sideModalContentStore = atom<Content>("none");

export const setSideModal = (content: Content) => {
  sideModalContentStore.set(content);
};
