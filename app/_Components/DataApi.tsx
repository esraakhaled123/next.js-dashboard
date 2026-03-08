"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/rudux/hooks";
import { setProducts } from "@/lib/rudux/dataSlice";

export default function DataApi() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.data.products);

  useEffect(() => {
    // جلب البيانات فقط إذا كانت المصفوفة فارغة
    if (products.length === 0) {
      const fetchInitialData = async () => {
        try {
          const res = await fetch("https://dummyjson.com/products");
          const data = await res.json();
          dispatch(setProducts(data.products));
        } catch (error) {
          console.error("Failed to initialize app data:", error);
        }
      };
      fetchInitialData();
    }
  }, [dispatch, products.length]);

  return null; // مكون صامت يعمل في الخلفية فقط
}