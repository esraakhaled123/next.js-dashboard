import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface DataState {
  products: Product[];
}

const initialState: DataState = {
  products: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = dataSlice.actions;
export default dataSlice.reducer;