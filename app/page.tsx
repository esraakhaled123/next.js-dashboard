import Image from "next/image";
import StatCard from "./_Components/StatCard";

export default function Home() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
    <p className="text-slate-400 text-sm">Products</p>
    <h3 className="text-2xl text-white font-bold">100</h3>
  </div>

  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
    <p className="text-slate-400 text-sm">Users</p>
    <h3 className="text-2xl text-white font-bold">30</h3>
  </div>

  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
    <p className="text-slate-400 text-sm">Orders</p>
    <h3 className="text-2xl text-white font-bold">52</h3>
  </div>

</div>
  );
}
