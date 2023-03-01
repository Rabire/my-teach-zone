import { atom } from "nanostores";

type Content = "none" | "write-schools" | "write-forms" | "write-students";

export const sideModalContentStore = atom<Content>("none");

export const setSideModal = (content: Content) => {
  sideModalContentStore.set(content);
};
