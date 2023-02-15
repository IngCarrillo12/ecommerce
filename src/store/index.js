import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductsSlice from "./ProductsSlice";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";

//Configuracion para guardar los valores
    const persistConfig = {
        key: 'root',
        storage: storage,
        whitelist: ['cartState','productsState']
    }
    const rootReducer = combineReducers({
        cartState: CartSlice,
        productsState: ProductsSlice
    })
    const persistReducers = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistReducers,
    middleware: [thunk]
})
export default store