import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="font-bold text-xl">InsightBoard</div>
      <div>
        {user && (
          <>
            <span className="mr-4">{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
