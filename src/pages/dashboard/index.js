import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const DeashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-44 max-w-[1200px] mx-auto text-center mb-44 pb-44">
      <p className="text-7xl font-bold text-blue-400">
        Welcome To Your Dashboard {user?.displayName}
      </p>
    </div>
  );
};

export default DeashBoard;
