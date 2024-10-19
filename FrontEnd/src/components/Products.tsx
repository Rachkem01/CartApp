import React, { useEffect } from 'react'
//reddux handles data synchronously, to handle data asynchronously we need to apply middleware
import { product,  error, loading, fetchData} from '../store/Product'
import { add } from '../store/cart'
import {Product} from '../store/Product'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import './Products.css'

const Products:React.FC = () => {
const dispatch = useDispatch<AppDispatch>()

const Products = useSelector(product)
const Loading = useSelector(loading)
const Error = useSelector(error)
const addToCart =(product:Product )=>{
dispatch(add(product))
}
useEffect(()=>{
//dispatch an action for fetchProducts
dispatch(fetchData())
},[dispatch])
  return (
    <div>
{Loading && <h1 className='Loading'>Loading.....</h1>}
{Error && <h1 className='Error'>Error :{Error}</h1>}
<div className="products">
<ul>
{Products.map((product)=>(
    <div key={product.id} className='product'>
<img src={product.image}/>

<p className='category'>{product.category}</p>
<p>#{product.price}</p>
<button onClick={()=>addToCart(product)}>Add To Cart</button>
    </div>
))}
</ul>
</div>
    </div>
  )
}

export default Products