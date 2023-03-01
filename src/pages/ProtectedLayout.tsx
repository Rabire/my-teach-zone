import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "@nanostores/react";

import { userProfileStore, setUserProfile } from "stores/profile";
import { getMe } from "supabase/auth";
import Header from "components/Header";

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
      <Header />

      <main className="p-10 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
