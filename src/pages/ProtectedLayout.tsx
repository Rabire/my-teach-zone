import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "@nanostores/react";

import { userProfileStore, setUserProfile } from "stores/profile";
import { getMe } from "supabase/auth";
import NavButton from "components/NavButton";

const ProtectedLayout = () => {
  const userProfile = useStore(userProfileStore);

  const navigate = useNavigate();

  useEffect(() => {
    getMe().then((data) => {
      setUserProfile(data.data);

      if (data.error) {
        toast.error("Could not retreive your profile");
        navigate("/login");
      }
    });
  }, []);

  if (!userProfile) return <p>Loading ...</p>;

  return (
    <div className="flex">
      <header className="h-screen p-6 align-middle shadow-lg flex flex-col items-center justify-between bg-gray-700">
        <div />
        <nav className="flex flex-col gap-4 ">
          <NavButton kind="/" />
          <NavButton kind="/formations" />
          <NavButton kind="/lessons" />
          <NavButton kind="/schools" />
        </nav>
        <Link to="/login">LOGOUT</Link>
      </header>

      <main className="p-10 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
