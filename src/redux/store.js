import { configureStore } from "@reduxjs/toolkit";
import productSlice, { productsFetch } from "./features/productSlice";
import { productsApi } from "./features/productsApi";
import cartReducer, { getTotalAmount } from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice, 
    cart: cartReducer,
    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
   return  getDefaultMiddleware().concat(productsApi.middleware)
  }
});

store.dispatch(productsFetch());
store.dispatch(getTotalAmount());

export default store;
