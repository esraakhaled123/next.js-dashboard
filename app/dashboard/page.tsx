import StatCard from "../_Components/StatCard";
import SalesChart from "../_Components/SalesChart";
import DataTable from "../_Components/DataTable";

export default function Dashboard() {
  return (
    // max-w-7xl لضمان عدم تمدد المحتوى بشكل مبالغ فيه في الشاشات العملاقة
    // space-y-6 بدلاً من mt-6 لتنظيم المسافات الرأسية
    <div className="max-w-7xl mx-auto space-y-6 pb-8   ">
      
      {/* 1. قسم الكروت (Grid) - متجاوب بالكامل */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard title="Total Users" value="1,240" />
        <StatCard title="Revenue" value="$8,540" />
        <StatCard title="Active Orders" value="320" />
        <StatCard title="Net Growth" value="+12%" />
      </div>

      {/* 2. قسم الرسم البياني والجدول */}
      {/* lg:grid-cols-3 هنا لو حبيتي مستقبلاً تخلي الشارت والجدول جنب بعض، حالياً هنخليهم فوق بعض لراحة العين */}
      <div className="flex flex-col gap-6">
        
        {/* قسم الشارت - يفضل يكون واخد خلفية بيضاء و Border ناعم */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm transition-all">
           <SalesChart />
        </div>

       

      </div>
    </div>
  );
}