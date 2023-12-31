
import React, { Component, useState } from 'react'
import Gabung from '../component/gabung'
import Navbar from '../component/Navbar'
import '../App.css'
import Marquee from '../../Marquee'
import Card from '../component/cardbox'
import Hero from '../component/hero'
import LoginForm from '../component/LoginForm'
import Ads from '../component/Ads'
import Footer from '../component/footerinfo'
import Bawah from '../component/footer'
import Carousel from '../component/Caraousel'
import Slider from '../component/Caraousel'

const Homepage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleToggleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

     
  const images = [

    
    '../src/assets/kampus.png',
    '../src/assets/msib.png',
    '../src/assets/infi.png',
    
    

  ];

return(
    <>  
  <div className='z-50 relative border-b-1 border-b-abu '>
      <Navbar onLoginButtonClick={handleToggleLoginForm} />
     
          {showLoginForm && <LoginForm onClose={handleToggleLoginForm} />}
      </div>

    <div className='z-20'>
      <Slider />
    </div>
    
    <div className='mq mt-20 pt-8 pb-10 text-2xl bg-slate-100'>
      <h1 className='text-center text-abu  font-medium text-4xl'>thanks to</h1>
    <Marquee images={images}/>
    </div>
    <div>
      <Card />
    </div>
    <div>
      <Hero />
    </div>
    <div>
      <Ads />
    </div>
    <Footer />
    <Bawah />
    </>
)
}

export default Homepage;