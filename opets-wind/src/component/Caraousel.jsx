import React from 'react'
import { Carousel } from 'flowbite-react';
import "../App.css"

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'


const Slider = () => {
  return (
    <div className=" relative -mt-[70px] min-h-screen h-screen max-w-screen-2xl sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
     <div style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="slide-1 flex h-full items-center  justify-start">
          <div className="container ml-20 mb-20">
            <div className="header">
          <p className='text-[35px]  font-bold'>khawatir tentang <br/> kebersihan <span className='text-opet' >anabul</span>mu?</p>
          </div>
          <div className="desc mt-3 ">
          <p className=' text-gray-100 font-medium '>tidak lupa kami juga menyediakan fitur Grooming <br/>untuk menjaga kebersihan<span className='text-opet' >anabul</span>mu</p>
        </div>
        <div className="btn mt-6">
          <button className=' px-7 py-2 bg-lemon font-semibold rounded hover:bg-gray-700 transition-all duration-300 hover:translate-y-4 '>Join now</button>
        </div>
        </div>
        </div>


    <div style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="slide-2 flex h-full items-center  ">
        <div className="container mb-20 ml-[47rem]">
            <div className="header">
          <p className='text-[35px]  font-bold'>khawatir akan kesehatan <span className='text-opet' >anabul</span>mu </p>
          </div>
          <div className="desc mt-3 ">
          <p className=' text-gray-100 font-medium '>tidak hanya penitipan kami juga menyiapkan<br/> tenaga kesehatan untuk <span className='text-opet' >anabul</span> mu selalu sehat </p>
        </div>
        <div className="btn mt-6">
          <button className=' px-7 py-2 bg-lemon font-semibold rounded hover:bg-gray-700 transition-all duration-300 hover:translate-y-4 '>Join now</button>
        </div>
        </div>
        </div>


    <div style={{ backgroundImage: `url(${banner4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="slide-3 flex h-full items-center justify-center">
        <div className="container ml-20 mb-20">
            <div className="header">
          <p className='text-[35px]  font-bold'>khawatir ketika <span className='text-opet' >anabul</span>mu  <br/>
          dititipkan?</p>
          </div>
          <div className="desc mt-3 ">
          <p className=' text-gray-100 font-medium '>Kami memberikan kebebasan untuk anda dan <span className='text-opet' >anabul</span> selalu <br/>terhubung setiap saat</p>
        </div>
        <div className="btn mt-6">
          <button className=' px-7 py-2 bg-lemon font-semibold rounded hover:bg-gray-700 transition-all duration-300 hover:translate-y-4 '>Join now</button>
        </div>
        </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;