export default function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

      <ul className="space-y-4">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Users</li>
        <li className="hover:text-gray-300 cursor-pointer">Reports</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}