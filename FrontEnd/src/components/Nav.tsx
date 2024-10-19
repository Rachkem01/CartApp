
import { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import './Nav.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Link } from 'react-router-dom'
const Nav= () => {
const [menu, setMenu] = useState("menu")
const cart = useSelector((state:RootState)=>state.cart.items)
  return (
    <div className='nav'>
<h1>Exquistes <span>Store</span></h1>
<div className="navbar">
<ul>
    <li><Link to ='/' className='Link'><a onClick={()=>setMenu("Home")} className={menu ==="Home"? "active":''}>Home</a></Link></li>
    <li><Link to ='/cart' className='Link'><a onClick={()=>setMenu("Cart")} className={ menu ==="Cart"?"active":''}><FaShoppingBag/><sup>{cart.length}</sup></a></Link></li>
    </ul>
</div>
    </div>
  )
}

export default Nav