"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/types/product";
import { exportToExcel, exportToPDF } from "@/lib/exportTable";
import { useAppDispatch, useAppSelector } from "@/lib/rudux/hooks";
import { setProducts } from "@/lib/rudux/dataSlice";

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.data.products);

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Product | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchProducts() {
      if (products.length > 0) return;
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        dispatch(setProducts(data.products));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, [dispatch, products.length]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  function handleSort(field: keyof Product) {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  }

  const headers = [
    { label: "Title", key: "title", hideOnMobile: false },
    { label: "Price", key: "price", hideOnMobile: false },
    { label: "Category", key: "category", hideOnMobile: true }, // سيختفي في الموبايل
    { label: "Rating", key: "rating", hideOnMobile: true },     // سيختفي في الموبايل
  ];

  return (
    <div id="products-section" className="bg-slate-900 p-4 sm:p-6 rounded-xl shadow border border-slate-700">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">
        Products Management
      </h2>

      {/* search + export */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-72 px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />

        <div className="grid grid-cols-2 sm:flex gap-2">
          <button
            onClick={() => exportToExcel(sortedProducts, "products_report")}
            className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors"
          >
            Excel
          </button>
          <button
            onClick={() => exportToPDF(sortedProducts, "products_report")}
            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors"
          >
            PDF
          </button>
        </div>
      </div>

      {/* table */}
      <div className="w-full overflow-hidden"> 
        <table className="w-full text-sm text-left text-slate-200">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              {headers.map((head) => (
                <th
                  key={head.key}
                  onClick={() => handleSort(head.key as keyof Product)}
                  className={`p-3 font-semibold cursor-pointer hover:text-indigo-400 ${
                    head.hideOnMobile ? "hidden md:table-cell" : ""
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {head.label}
                    {sortField === head.key && (
                      <span className="text-[10px]">
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                  {/* Title */}
                  <td className="p-3 font-medium text-white max-w-[150px] truncate">
                    {product.title}
                  </td>

                  {/* Price */}
                  <td className="p-3 text-emerald-400 font-semibold italic">
                    ${product.price}
                  </td>

                  {/* Category - Hidden on Mobile */}
                  <td className="p-3 hidden md:table-cell">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs">
                      {product.category}
                    </span>
                  </td>

                  {/* Rating - Hidden on Mobile */}
                  <td className="p-3 hidden md:table-cell">
                    ⭐ {product.rating}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-10 text-center text-slate-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 disabled:opacity-30 text-xs text-white"
        >
          Prev
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-lg border text-xs transition-all ${
                currentPage === i + 1
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 disabled:opacity-30 text-xs text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}