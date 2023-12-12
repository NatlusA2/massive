import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Container } from 'postcss'
import { Route, Routes } from 'react-router-dom'


import Homepage from './pages/Homepage'
import Input from './pages/Input'
import Layanan from './pages/Layanan'
import Tentang from './pages/Tentang'
import Gabung from './component/gabung'
import Admin from './pages/admin-dasboard'


function App() {
 
  return (
    <div> 
    <Routes>
      <Route path='/' Component={Homepage} />
      <Route path='/Tentang' Component={Tentang} />
      <Route path='/Layanan' Component={Layanan} />
      <Route path='/Input' Component={Input} />
      <Route path='/admin-dasboard' Component={Admin} />
    </Routes>
    </div>
  )
}

export default App
