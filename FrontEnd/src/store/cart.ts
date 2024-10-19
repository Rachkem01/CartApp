
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Product{
    id:number,
   
    category:string,
    price:string,
    image:string
}
interface CartState{
items :Product[]
}
const initialState:CartState ={
    items:[]
} 
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action:PayloadAction<Product>){
         state.items.push({...action.payload})  
            },
remove(state){
    state.items.pop()
}
    }
})

export const {remove, add} = cartSlice.actions
export default cartSlice.reducer