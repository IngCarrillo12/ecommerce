import { createSlice } from "@reduxjs/toolkit";


const ProductsSlice = createSlice({
    name:'products',
    initialState:{
        listProducts: []
    },
    reducers:{
        initState(state, action){
            state.listProducts = action.payload
        }
    }
})
export default ProductsSlice;
export const { initState } = ProductsSlice.actions

export const GetProducts = ()=> async(dispatch)=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    dispatch(initState(data))
}