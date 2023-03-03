import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "@nanostores/react";

import { userTeacherStore, setUserTeacher } from "stores/user";
import { getMe } from "supabase/auth";
import Header from "components/Header";
import SideModal from "components/SideModal";
import {
  refreshFormationBoard,
  refreshStudentsBoard,
} from "supabase/dashboards";

const ProtectedLayout = () => {
  const userTeacher = useStore(userTeacherStore);

  const navigate = useNavigate();

  useEffect(() => {
    getMe().then((data) => {
      setUserTeacher(data.data);

      refreshFormationBoard();
      refreshStudentsBoard();
      // getHome();

      if (data.error) {
        toast.error("Could not retreive your teacher");
        navigate("/login");
        return;
      }
    });
  }, []);

  if (!userTeacher) return <p>Loading ...</p>;

  return (
    <div className="md:flex relative">
      <Header />

      <main className="p-10 w-full">
        <Outlet />
      </main>

      <SideModal />
    </div>
  );
};

export default ProtectedLayout;
