import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Card.css'
import { useInView } from 'react-intersection-observer';


const HeroLayanan = () => {
    const [showHero, setShowHero] = useState(false);
    
        const [ref, inView] = useInView({
          triggerOnce: true, // Animasi hanya dijalankan sekali
        });
    
    return(
        <div className="bg-lemon h-72 flex items-center">
            <CSSTransition in={inView} timeout={500} classNames="fade">
         <div ref={ref} className="container  flex items-center justify-center gap-60">
            <div className="desc bg-white w-96 h-44 p-5">
                <h1 className="text-center text-2xl font-semibold mb-4">OPETS hadir memberi solusi</h1>
                <p className="text-abu">Kami hadir untuk memudahkan pemilik hewan peliharaan menemukan penitipan yang menyenangkan dan aman.</p>
            </div>
            <div> <img src="./src/assets/herolayanan.png" className="h-52" /></div>
           </div>
        </CSSTransition>
        </div>
    )
}

export default HeroLayanan;