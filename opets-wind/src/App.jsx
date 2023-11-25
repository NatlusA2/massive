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
import Marquee from '../Marquee'


function App() {

  
  const images = [

    
    '../src/assets/kampus.png',
    '../src/assets/msib.png',
    '../src/assets/il.jpg',
    '../src/assets/logowhite.png',
    

  ];

  return (
    <div>
    <div className='mybg'>
      <Navbar />
        <div className='container ml-20 my-20'>
          <Gabung />
        </div>
  
    </div>
    <div className='mq  pt-8 pb-10 text-2xl bg-slate-100'>
      <h1 className='text-center font-bold'>thanks to</h1>
    <Marquee images={images}/>
    </div>

    <Routes>
      <Route path='/' Component={Homepage} />
      <Route path='/Tentang' Component={Tentang} />
      <Route path='/Layanan' Component={Layanan} />
      <Route path='/Input' Component={Input} />
    </Routes>
    </div>
  )
}

export default App
