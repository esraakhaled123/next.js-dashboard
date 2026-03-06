"use client";

import { useEffect, useState } from "react";

export default function DataTable() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    async function getUsers(){
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    }

    getUsers();

  },[])

  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Company</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user)=>(
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.firstName} {user.lastName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.company?.name}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}