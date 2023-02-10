import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductsSlice from "./ProductsSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        products: ProductsSlice.reducer,
    },
})
export default store