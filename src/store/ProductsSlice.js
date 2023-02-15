import { createSlice } from "@reduxjs/toolkit";

const initialState = {listProducts: [], loading:true}

const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        initState(state, action){
            state.listProducts = action.payload
            state.loading = false
        }
    }
})
export default ProductsSlice.reducer;
export const { initState } = ProductsSlice.actions

export const GetProducts = ()=> async(dispatch)=>{
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json()
    dispatch(initState(data))
}
