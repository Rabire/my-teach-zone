import { Outlet } from "react-router-dom";
import supabase from "supabase";

const GuestLayout = () => {
  supabase.auth.signOut();

  return <Outlet />;
};

export default GuestLayout;
