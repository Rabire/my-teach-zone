import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) return <Navigate to="/login" />;

  return (
    <div>
      <header>
        header
        <button onClick={() => setLoggedIn((prev) => !prev)}>
          Logged in : {Number(loggedIn)}
        </button>
      </header>

      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
