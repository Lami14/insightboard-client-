import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../api/axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users")
      .then((res) => setUsers(res.data))
      .catch(() => alert("Failed to fetch users"));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="text-center">
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default Users;
