export default function Navbar() {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-gray-600">Esraa</span>
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
}