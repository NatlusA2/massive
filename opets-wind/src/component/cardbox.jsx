import React, { useState, useEffect } from 'react';


const Card = () => {


    return(
      
           
        <div>
                 <h1 className="text-4xl text-center text-abu my-10 font-medium ">Fitur</h1>
            <div className="container flex justify-center items-baseline gap-16 pb-10">
           
  <div class="w-64 rounded-md overflow-hidden shadow-lg  ">
  <img class="w-full h-48" src="./src/assets/gruming.jpg" />
  <div class="px-6 py-4">
    <div class="font-bold text-abu text-xl mb-2  ">Grooming</div>
    <p class="text-gray-700 text-base">
  para staff perawatan ke kucing mulai dari pemotongan kuku pembersihan kotoran.
    </p>
  </div>
    </div>

    <div class="w-64 rounded overflow-hidden shadow-lg">
  <img class="w-full h-48" src="./src/assets/sehat.jpg" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-abu mb-2">cek kesehatan</div>
    <p class="text-gray-700 text-base">
      para ahli akan senantiasa mengecek keadaan anabul mu sehingga kamu dapat berpergian dengan tenang
    </p>
  </div>
    </div>

    <div class="w-64  rounded overflow-hidden shadow-lg">
  <img class="w-full h-48" src="./src/assets/kasi.jpg" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-abu mb-2">Pemberian Vitamin</div>
    <p class="text-gray-700 text-base">
     pemberian vitamin kepada anabul mu sehingga kesehatan nya senantiasa terjaga
    </p>
  </div>
    </div>

    
    </div>
        </div>
      
    )
}

export default Card;