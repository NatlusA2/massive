import '../App.css'

const Ads = () => {
    return(
      
            <div className="Ads  bg-lemon w-full h-60 pt-16 pb-16">
                <img src="./src/assets/kaget.png" className=' absolute h-56 w-auto mr-36 -mt-28   right-0 transform translate-y-10 z-10 ' />
                <div className="container mx-auto">
                <div className="container-ads bg-white  relative w-10/12 mx-auto h-40 ">
                    <div className="desc-ads w-8/12 pt-1 pl-10">
                    <h1 className='text-abu font-medium text-5xl ' >Bergabung dengan Kami sekarang juga</h1>
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