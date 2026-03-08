// import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { Product } from "../types/product"

// interface DataState {
//   products: Product[]
// }

// const initialState: DataState = {
//   products: []
// }

// const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {
//     setProducts: (state, action: PayloadAction<Product[]>) => {
//       state.products = action.payload
//     }
//   }
// })

// export const { setProducts } = dataSlice.actions
// export default dataSlice.reducer


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. عرفنا شكل المنتج بدل any
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: number;
  [key: string]: unknown; // دي بتسمح بوجود خصائص تانية من غير ما نستخدم any
}

interface Sales {
  name: string;
  sales: number;
}

interface DataState {
  products: Product[]; // بدل any[]
  sales: Sales[];
}

const initialState: DataState = {
  products: [],
  sales: [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 200 },
    { name: "May", sales: 700 },
  ]
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // 2. استخدمنا Product[] في الـ PayloadAction
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    }
  }
});

export const { setProducts } = dataSlice.actions;
export default dataSlice.reducer;