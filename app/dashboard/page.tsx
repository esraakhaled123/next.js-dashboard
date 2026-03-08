import StatCard from "../_Components/StatCard";
import SalesChart from "../_Components/SalesChart";
import DataTable from "../_Components/DataTable";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-8   ">
      
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard title="Total Users" value="1,240" />
        <StatCard title="Revenue" value="$8,540" />
        <StatCard title="Active Orders" value="320" />
        <StatCard title="Net Growth" value="+12%" />
      </div>

     
      <div className="flex flex-col gap-6">
        
        <div className="bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm transition-all">
           <SalesChart />
        </div>

       

      </div>
    </div>
  );
}