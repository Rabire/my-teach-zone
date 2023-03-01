import { ReactComponent as SchoolIcon } from "assets/schools.svg";
import { ReactComponent as FormationsIcon } from "assets/formations.svg";
import { ReactComponent as HomeIcon } from "assets/home.svg";

export type NavPaths = "/" | "/schools" | "/formations";

export const getIcon = (kind: NavPaths) => {
  switch (kind) {
    case "/schools":
      return <SchoolIcon />;

    case "/formations":
      return <FormationsIcon />;

    default:
      return <HomeIcon />;
  }
};
