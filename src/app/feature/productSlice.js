import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("product")
  ? JSON.parse(localStorage.getItem("product"))
  : {
      product: [],
    };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product.push(...payload);
      localStorage.setItem("product", JSON.stringify(state));
    },
    maxPrep: (state, { payload }) => {
      state.product = state.product.filter((item) => item.prepTime <= payload);
      localStorage.setItem("product", JSON.stringify(state));
    },
  },
});

export const { addProduct, maxPrep } = productSlice.actions;
export default productSlice.reducer;
