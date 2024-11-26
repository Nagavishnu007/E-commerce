import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../redux/ProductSlice'
import CartSlice from '../redux/CartSlice'

 const store = configureStore({
    reducer: {
         product:ProductSlice,
         cart:CartSlice
    }
}
)
export default store;