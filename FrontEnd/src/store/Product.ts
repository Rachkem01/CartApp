import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "./store";

 export interface Product{
    id:number,
   
    category:string,
    price:string,
    image:string
}
 export interface StoreModelState {
 data:Product[],
 loading:boolean,
 error:string |null
}



const initialState:StoreModelState ={
    data:[],
    loading:true,
    error:null
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

},
extraReducers:(builder)=>{
builder
.addCase(fetchData.pending, (state)=>{
    state.loading = true
    state.error = null
})
.addCase(fetchData.fulfilled, (state, action)=>{
    state.loading = false,
    state.data = action.payload
})
.addCase(fetchData.rejected, (state, action)=>{
    state.loading= false,
    state.error =action.error.message || 'Failed to Fetch Data'
})
}

})

export const  fetchData = createAsyncThunk('products/fetchData', async ()=>{
    const response = await   fetch("https://fakestoreapi.com/products")
    
    return (await response.json()) as Product[]
   
    

})

export const product =(state:RootState)=>state.product.data
export const loading = (state:RootState)=>state.product.loading
export const error = (state:RootState) =>state.product.error
export default productSlice.reducer


// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
     
// }