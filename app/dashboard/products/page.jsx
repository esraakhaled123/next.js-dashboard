"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Products Table
      </h2>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Rating</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">

              <td className="p-3">{product.title}</td>

              <td className="p-3">
                ${product.price}
              </td>

              <td className="p-3">
                {product.category}
              </td>

              <td className="p-3">
                {product.rating}
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}