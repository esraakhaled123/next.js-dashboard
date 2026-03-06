"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: {
    name: string;
  };
};

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "company", label: "Company" },
];

export default function DataTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    }

    getUsers();
  }, []);

  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-3 text-left">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
          
            {users.slice(0,5).map((user) => {
              const row = [
                user.id,
                `${user.firstName} ${user.lastName}`,
                user.email,
                user.company?.name,
              ];

              return (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  {row.map((cell, index) => (
                    <td key={index} className="p-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}