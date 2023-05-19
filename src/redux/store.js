import { configureStore } from "@reduxjs/toolkit";
import productSlice, { productsFetch } from "./features/productSlice";
import { productsApi } from "./features/productsApi";

const store = configureStore({
  reducer: {
    products: productSlice, 
    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
   return  getDefaultMiddleware().concat(productsApi.middleware)
  }
});

store.dispatch(productsFetch());

export default store;
