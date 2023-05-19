import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
    'products/productsFetch', 
    async () => {
        const response = await axios.get('https://dummyjson.com/products')
        return response.data.products
    }
)

const productSlice = createSlice({
    name : 'products',
    initialState:{
        items:[],
        status: null
    },
    reducers:{},
    extraReducers:{
        [productsFetch.pending] : (state, action)=>{
            state.status = 'pending'
        },
        [productsFetch.fulfilled] : (state,action) =>{
            state.status = 'success';
            state.items = action.payload;
        },
        [productsFetch.rejected] : (state,action) =>{
            state.status = 'rejected';
        },
    }
})

export const getAllData = (state) => state.products

export default productSlice.reducer