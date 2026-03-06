import StatCard from "../_Components/StatCard";
import SalesChart from "../_Components/SalesChart";
import DataTable from "../_Components/DataTable";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Users" value="1240" />
        <StatCard title="Revenue" value="$8540" />
        <StatCard title="Orders" value="320" />
        <StatCard title="Growth" value="12%" />
      </div>

      <div className="mt-6">
        <SalesChart />
        <DataTable />
      </div>
    </>
  );
}