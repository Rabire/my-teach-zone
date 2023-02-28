import { userProfileStore } from "stores/profile";
import { useStore } from "@nanostores/react";

const Dashboard = () => {
  const userProfile = useStore(userProfileStore);

  return (
    <div>
      <h1>Hello {userProfile?.profile.name}</h1>
    </div>
  );
};

export default Dashboard;
