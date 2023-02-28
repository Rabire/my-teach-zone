import supabase from "supabase";

const Dashboard = () => {
  supabase.from("students").select().then(console.log);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
