import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100 p-4 h-screen">
      <ul>
        <li>
          <Link to="/dashboard" className="block py-2">Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className="block py-2">Users</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
