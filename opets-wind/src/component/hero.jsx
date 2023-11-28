import '../App.css'

const Hero = () => {
    return (
        <div className=''>
            <div className="container pt-10 w-full h-66 pb-11  bg-opet overflow-auto overflow-x-hidden">
                <div className='foto ml-44 mt-16 float-left '>
                <img src="../src/assets/ini.png" className='' />
                </div>
                <div className="container-desc mt-32">
                    <h1 className='text-4xl text-center text-abu my-10 font-medium mr-10 '>What We Do?</h1>
                  
                      <p className='text-abu'>kami menghubungkan kamu dan anabul<br />
                      dengan menggabungkan teknologi dan research mendalam yang kami lakukan<br />
                      kamu dapat mengecek keadaan anabul mu kapan saja dan dimana saja</p>
                  
                </div>          
            </div>
        </div>
    )
}

export default Hero;