import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Card.css'
import { useInView } from 'react-intersection-observer';


const Cara = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animasi hanya dijalankan sekali
      });
    
    return(
            <CSSTransition in={inView} timeout={500} classNames="fade">
        <div  className="mb-10 h-96  ">
            <div ref={ref} className="container p-10 ">
                <h1 className="text-center text-abu text-2xl font-semibold mb-10">cara kami bekerja</h1>
                <div className="flex mt-3 ">
                <div className="cardbox w-64 h-52 mx-20 border-4">

                <div className="gambar mx-20">
                    <img src="./src/assets/kordinasi2.png" alt="" />
                </div>
                <div className="desc text-center text-abu">
                    <h1 className="text-center font-bold mt-2 ">kordinasi rutin</h1>
                    <p className="mt-3">Menjalin komunikasi yang rutin antar tim agar menghasilkan solusi terbaik.</p>
                </div>

                </div>

                 <div className="cardbox w-64 h-52 mx-20 border-4">
                <div className="gambar mx-20">
                    <img src="./src/assets/user.png" alt=""/>
                </div>
                <div className="desc text-center text-abu">
                    <h1 className="text-center font-bold mt-2 ">Tenaga profesional</h1>
                    <p className="mt-3">kami memastikan bahwa para tenaga yang digunakan telah tersertifikasi </p>
                </div>

                </div>

                <div className="cardbox w-64 h-52 mx-20 border-4">
                <div className="gambar mx-20">
                    <img src="./src/assets/hand.png" alt="" />
                </div>
                <div className="desc text-center text-abu">
                    <h1 className="text-center font-bold mt-2 ">Terjangkau</h1>
                    <p className="mt-3">Kami tetap mencoba memberi harga yang Terjangkau</p>
                </div>

                </div>


                </div>
            </div>
        </div>
                </CSSTransition>
    )
}

export default Cara;