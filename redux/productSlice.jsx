import { createSlice } from "@reduxjs/toolkit";

const initialState ={
        products:[],
        searchTerm:'',
        filterData:[]
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        setProduct(state,action){
                state.products = action.payload
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload
            state.filterData = state.products.filter(product=>
                product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        }
    }

})

export const {setProduct,setSearchTerm} = ProductSlice.actions
export default ProductSlice.reducer