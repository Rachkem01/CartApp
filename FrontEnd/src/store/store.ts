
import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Product'
import cartSlice from './cart'
 export const  store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch