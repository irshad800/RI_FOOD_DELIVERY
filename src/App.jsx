import React from 'react'
import NavaBar from './components/NavBar/NavaBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'


const App = () => {
  return (
    <div className='app'>
<NavaBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/place-order' element={<PlaceOrder/>}/>
</Routes>
      
    </div>
  )
}

export default App