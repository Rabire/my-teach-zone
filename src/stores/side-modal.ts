import { atom } from "nanostores";

type Content = "none" | "write-schools" | "write-forms";

export const sideModalContentStore = atom<Content>("none");

export const setSideModal = (content: Content) => {
  sideModalContentStore.set(content);
};
