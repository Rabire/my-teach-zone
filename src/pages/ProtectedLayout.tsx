import { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) return <Navigate to="/login" />;

  return (
    <div className="flex">
      <header className="h-screen p-6 align-middle shadow-lg flex flex-col items-center justify-between">
        <div />
        <nav className="flex flex-col gap-4 ">
          <Link to="/" className="aspect-square flex-center bg-red-300">
            Home
          </Link>
          <button className="aspect-square flex-center bg-red-300">
            Search
          </button>
          <Link to="/lessons" className="aspect-square flex-center bg-red-300">
            lessons
          </Link>
          <Link to="/students" className="aspect-square flex-center bg-red-300">
            students
          </Link>
        </nav>
        <button>LOGOUT</button>
      </header>

      <main className="p-10 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
