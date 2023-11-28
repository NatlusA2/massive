import '../App.css'
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import '../Card.css';
import React, { useState, useEffect } from 'react';
const Ads = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Mengizinkan animasi untuk dijalankan setiap kali masuk ke dalam layar
      });
    
      const [isInView, setIsInView] = useState(false);
     // Memperbarui state saat status inView berubah
     React.useEffect(() => {
      setIsInView(inView);
    }, [inView]);

    return(
      
            <div className="Ads  bg-lemon w-full h-60 pt-16 pb-16 ">
                <CSSTransition in={isInView} timeout={500} classNames="fade">
                <img src="./src/assets/kaget.png" className=' absolute h-56 w-auto mr-36 -mt-28   right-0 transform translate-y-10 z-10  ' />
                </CSSTransition>
                <div ref={ref} className="container mx-auto">
                <div className="container-ads bg-white  relative w-10/12 mx-auto h-40 ">
                    <div className="desc-ads w-8/12 pt-1 pl-10">
                <CSSTransition in={isInView} timeout={500} classNames="fade">
                    <h1 className='text-abu font-medium text-5xl ' >Bergabung dengan Kami sekarang juga</h1>
                </CSSTransition>
                    </div>
                    <div className="btn-ads mt-5 pl-5">
                    <button className='bg-opet ml-5 px-2 py-1 text-sm w-36'>Gabung sekarang</button>
                    <button className='bg-opet ml-5 px-2 py-1 text-sm w-36 '>selengkap nya</button>
                    </div>
                </div>
                </div>
            </div>
     
    )
}

export default Ads;