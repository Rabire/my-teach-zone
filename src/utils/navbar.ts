export type NavPaths = "/" | "/lessons" | "/schools" | "/formations";

export const getIcon = (kind: NavPaths) => {
  switch (kind) {
    case "/lessons":
      return ".svg";

    case "/schools":
      return ".svg";

    case "/formations":
      return ".svg";

    default:
      return ".svg";
  }
};
