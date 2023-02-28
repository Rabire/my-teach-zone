import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { NavPaths, getIcon } from "utils/navbar";

type Props = { kind: NavPaths };

const NavButton = ({ kind }: Props) => {
  const location = useLocation();

  const icon = getIcon(kind);

  const isActive = location.pathname === kind;

  return (
    <Link
      to={kind}
      className={clsx(
        "aspect-square flex-center rounded bg-gray-800 hover:border-2 p-2",
        isActive && "bg-violet-500"
      )}
    >
      {icon}
    </Link>
  );
};

export default NavButton;
