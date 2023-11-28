import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Card.css'
import { useInView } from 'react-intersection-observer';




const Tentangkami = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animasi hanya dijalankan sekali
      });
    
    return (
        <div>
        <div className="bg-opet h-72 flex items-center">
        <CSSTransition in={inView} timeout={500} classNames="fade">
         <div ref={ref} className="container flex items-center justify-center gap-60">
            <div> <img src="./src/assets/tentang.png" className="h-52" /></div>
            <div className="desc bg-white w-96 h-44 p-5">
                <h1 className="text-center text-2xl font-semibold mb-4">Tentang kami</h1>
                <p className="text-abu">Kami adalah aplikasi penitipan hewan yang menawarkan layanan penitipan hewan yang lengkap, mulai dari penitipan harian, mingguan, hingga bulanan.</p>
            </div>
           </div>
           </CSSTransition>
        </div>
        </div>
    )
}

export default Tentangkami;