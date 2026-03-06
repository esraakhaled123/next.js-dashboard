"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  // search
  const [search, setSearch] = useState("");

  // sorting
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // filtering
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {

    if (!sortField) return 0;

    if (a[sortField] < b[sortField])
      return sortOrder === "asc" ? -1 : 1;

    if (a[sortField] > b[sortField])
      return sortOrder === "asc" ? 1 : -1;

    return 0;

  });

  function handleSort(field) {

    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }

  }

  const headers = [
    { label: "Title", key: "title" },
    { label: "Price", key: "price" },
    { label: "Category", key: "category" },
    { label: "Rating", key: "rating" },
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-xl shadow border border-slate-700">

      <h2 className="text-xl font-semibold mb-4 text-white">
        Products Table
      </h2>

      {/* search */}

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full md:w-72 px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="overflow-x-auto">

        <table className="w-full text-sm text-left text-slate-200">

          <thead className="bg-slate-800">
            <tr>
              {headers.map((head) => (
                <th
                  key={head.key}
                  onClick={() => handleSort(head.key)}
                  className="p-3 font-semibold cursor-pointer hover:text-indigo-400"
                >
                  {head.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedProducts.map((product) => {

              const row = [
                product.title,
                `$${product.price}`,
                product.category,
                product.rating,
              ];

              return (
                <tr
                  key={product.id}
                  className="border-t border-slate-700 hover:bg-slate-800 transition"
                >
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