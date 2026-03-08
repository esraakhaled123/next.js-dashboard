"use client";

import { useAppSelector } from "@/lib/rudux/hooks";
import StatCard from "../_Components/StatCard";
import SalesChart from "../_Components/SalesChart";
import ProductsPage from "../_Components/page";

export default function Dashboard() {

  const products = useAppSelector((state) => state.data.products);

  const isLoading = products.length === 0;

  const totalProducts = products.length;

  const totalRevenue = products.reduce(
    (acc, curr) => acc + (curr.price || 0),
    0
  );

  const avgRating =
    products.length > 0
      ? (
          products.reduce((acc, curr) => acc + (curr.rating || 0), 0) /
          products.length
        ).toFixed(1)
      : "0";

  const uniqueCategories = new Set(products.map((p) => p.category)).size;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 text-sm">
          Overview of your store statistics
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={isLoading ? "..." : totalProducts.toLocaleString()}
        />

        <StatCard
          title="Total Value"
          value={isLoading ? "..." : `$${totalRevenue.toLocaleString()}`}
        />

        <StatCard
          title="Average Rating"
          value={isLoading ? "..." : `⭐ ${avgRating}`}
        />

        <StatCard
          title="Categories"
          value={isLoading ? "..." : uniqueCategories.toString()}
        />
      </div>

      {/* Chart */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
        <div className="flex justify-between items-center mb-6">

          <div>
            <h3 className="text-white font-semibold text-lg">
              Product Price Overview
            </h3>
            <p className="text-slate-500 text-xs">
              Real-time data from inventory
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-500 text-xs font-bold uppercase">
              Live
            </span>
          </div>

        </div>

        <div className="h-[320px] w-full">
          <SalesChart />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
        <h3 className="text-white font-semibold text-lg mb-4">
          Products
        </h3>

        <ProductsPage />
      </div>

    </div>
  );
}