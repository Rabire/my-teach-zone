import supabase from "../supabase";

const Dashboard = () => {
  supabase.from("students").select().then(console.log);

  return <div>Dashboard</div>;
};

export default Dashboard;
