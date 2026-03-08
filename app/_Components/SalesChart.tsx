

"use client";

import { useAppSelector } from "@/lib/rudux/hooks";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";


export default function SalesChart() {
  const products = useAppSelector((state) => state.data.products);

  const chartData = products.slice(0, 7).map((p) => ({
    name: p.title.split(" ")[0], 
    price: p.price
  }));

  return (
    <div className="bg-slate-900 p-4 rounded-xl shadow border border-slate-700 mt-6 h-[300px]">
      <h3 className="text-white text-sm mb-4 font-medium">Product Price Trend</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        {/* نمرر الداتا الجديدة chartData */}
        <LineChart data={chartData}>
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            tickFormatter={(val) => `$${val}`} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px", color: "#fff" }}
          />
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
          <Line
            type="monotone"
            dataKey="price" // غيرناها لـ price بدل sales عشان تبقى معبرة
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ fill: "#6366f1", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// "use client";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer
// } from "recharts";

// const data = [
//   { name: "Jan", sales: 400 },
//   { name: "Feb", sales: 300 },
//   { name: "Mar", sales: 500 },
//   { name: "Apr", sales: 200 },
//   { name: "May", sales: 700 },
// ];

// export default function SalesChart() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow mt-6 h-[300px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <CartesianGrid stroke="#eee" />
//           <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3}/>
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }