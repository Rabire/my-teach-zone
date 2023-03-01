import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const Header = () => {
  return (
    <header className="h-screen p-6 align-middle shadow-lg flex flex-col items-center justify-between bg-gray-700">
      <div />
      <nav className="flex flex-col gap-4 ">
        <NavButton kind="/" />
        <NavButton kind="/formations" />
        <NavButton kind="/schools" />
        <NavButton kind="/lessons" />
      </nav>
      <Link to="/login">LOGOUT</Link>
    </header>
  );
};

export default Header;
