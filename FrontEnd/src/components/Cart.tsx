
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cart'
import { RootState } from '../store/store'
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch()
const cart = useSelector((state:RootState)=>state.cart.items)
const removeFromCart = ()=>{
dispatch(remove())
}
  return (
    <div className='carts'>
    <h1>Your Cart</h1>
 
      <ul >
{cart.map((cart)=>(
 <div key={cart.id} className='cart'>
<img src={cart.image}/>
<p className='category'>{cart.category}</p>
<p>#{cart.price}</p>
<button onClick={()=>removeFromCart()}>Delete From Cart</button>
 </div>
))}
 </ul> 
 
   </div>
  )
}

export default Cart