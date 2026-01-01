import React from 'react'
import Home from './Components/Home'
import {BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Blog from './Components/Blog'
import Shop from './Components/Shop'
import Vehicle from './Components/Vehicle'
import Cart from './Components/Cart'
import User from './Components/User'

const App = () => {
  return (
    <Router>
      <main>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/vehicle' element={<Vehicle/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/user' element={<User/>}/>

        </Routes>
      </main>
      
    </Router>
  )
}

export default App
