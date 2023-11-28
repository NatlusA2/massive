import '../App.css'
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import '../Card.css'; 

const Hero = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Mengizinkan animasi untuk dijalankan setiap kali masuk ke dalam layar
      });
    
      const [isInView, setIsInView] = useState(false);
     // Memperbarui state saat status inView berubah
     React.useEffect(() => {
      setIsInView(inView);
    }, [inView]);

    return (
        <div >
            <div  className=" pt-10 w-full h-66 pb-11  bg-opet overflow-auto overflow-x-hidden">
                <div ref={ref} className='foto ml-44 mt-16 float-left '>
                <img src="../src/assets/ini.png" className='' />
                </div>
            <CSSTransition in={isInView} timeout={500} classNames="fade">
                <div className="container-desc mt-32">
                    <h1 className='text-4xl text-center text-abu my-10 font-medium mr-10 '>What We Do?</h1>
                  
                      <p className='text-abu'>kami menghubungkan kamu dan anabul<br />
                      dengan menggabungkan teknologi dan research mendalam yang kami lakukan<br />
                      kamu dapat mengecek keadaan anabul mu kapan saja dan dimana saja</p>
                  
                </div>          
        </CSSTransition>
            </div>
        </div>
    )
}

export default Hero;