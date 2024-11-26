import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import Checkout from './Pages/Checkout.jsx'
import Order from './Pages/Order.jsx'
import FilterData from './Pages/FilterData.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'

const App = () => {
  const [order,setOrder]= useState(null)
  return (
    <>
      <BrowserRouter>
              <Nav/>
                   <Routes>
                          <Route path='/' element={<Home/>}/>
                          <Route path='/shop' element={<Shop/>}/>
                          <Route path='/cart' element={<Cart/>}/>
                          <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
                          <Route path='/order-confirmation' element={<Order order={order}/>}/>
                          <Route path='/filter-data' element={<FilterData/>}/>
                          <Route path='/product/:id' element={<ProductDetails/>}/>
                   </Routes>
              <Footer/>     
      </BrowserRouter>
    </>
  )
}

export default App
