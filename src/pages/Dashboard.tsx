import { userProfileStore } from "stores/profile";
import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userProfile = useStore(userProfileStore);

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">
        Hi {userProfile?.profile.name}
      </h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Current lesson</h2>
          <Link to="" className="bg-gray-700 rounded-md p-4">
            <h3 className="text-xl">Advanced react</h3>
            <p className="opacity-50">27 feb - 2 mar</p>
          </Link>

          <h2 className="text-xl opacity-50 mt-4">Incomming lessons</h2>
          <Link to="" className="bg-gray-700 rounded-md p-4">
            <h3 className="text-xl">Python B2</h3>
            <p className="opacity-50">27 feb - 2 mar</p>
          </Link>
          <Link to="" className="bg-gray-700 rounded-md p-4">
            <h3 className="text-xl">Gestion de projet</h3>
            <p className="opacity-50">27 feb - 2 mar</p>
          </Link>
        </div>

        <ul className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Recent students</h2>

          <Link to="" className="bg-gray-700 rounded p-2">
            Rabire HAKIM
          </Link>
          <Link to="" className="bg-gray-700 rounded p-2">
            Leo DI MARTINO
          </Link>
          <Link to="" className="bg-gray-700 rounded p-2">
            Oussama BECHICHI
          </Link>
          <Link to="" className="bg-gray-700 rounded p-2">
            Yann BONAUDO
          </Link>
          <Link to="" className="bg-gray-700 rounded p-2">
            Rabire HAKIM
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
