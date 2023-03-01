import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "@nanostores/react";

import { userTeacherStore, setUserTeacher } from "stores/user";
import { getMe } from "supabase/auth";
import Header from "components/Header";

const ProtectedLayout = () => {
  const userTeacher = useStore(userTeacherStore);

  const navigate = useNavigate();

  useEffect(() => {
    getMe().then((data) => {
      setUserTeacher(data.data);

      if (data.error) {
        toast.error("Could not retreive your teacher");
        navigate("/login");
      }
    });
  }, []);

  if (!userTeacher) return <p>Loading ...</p>;

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