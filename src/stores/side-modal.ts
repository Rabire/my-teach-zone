import { atom } from "nanostores";

export const isSideModalOpenStore = atom(false);

export const toggleSideModal = (action: "open" | "close") => {
  isSideModalOpenStore.set(action === "open");
};
