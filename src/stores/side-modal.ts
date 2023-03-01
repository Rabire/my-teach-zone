import { atom } from "nanostores";

export const isSideModalOpenStore = atom(false);

export const toggleSideModal = (action: "open" | "close") => {
  console.log(action === "open");
  isSideModalOpenStore.set(action === "open");
};
