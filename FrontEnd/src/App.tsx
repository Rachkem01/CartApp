import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router , Route,  Routes } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Router>
      <Provider store={store}>
      <Nav/>
    <Routes>
    <Route path='/' element={<Products/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    
    </Routes>
    </Provider>
    </Router>
    </div>
  )
}

export default App