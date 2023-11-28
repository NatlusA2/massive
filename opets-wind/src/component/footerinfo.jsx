
import logo from "../assets/logowhite.png"

const Footer = () => {
    return(
        <div>
           
  <div className="mx-auto w-full  pl-16 max-w-screen-xl p-4 py-6 lg:py-8 bg-opet overflow-hidden">
      <div className="mb-6  md:mb-0">
        <a href="#" className="">
          <img src={logo} className="h-16 me-3" alt="" />
        </a>
      </div>
    <div className="md:flex md:justify-center">
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div className="mr-72 mt-3 w-80">

          <ul className="text-abu  font-medium">
            <li className="mb-4 flex items-center">
                <div className="mr-4"><img src="./src/assets/alamat.png" className="h-10 w-36" />
                </div>
                  Telkom STO Kebayoran
                    Jl. Sisingamangaraja No.4 RT.2/RW.1, Selong. Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta 12110.
            </li>
            <li className="mb-4 flex items-center">
            <div className="mr-4"><img src="./src/assets/telpon.png" className="h-10 w-10" />
                </div>
          telepon:089123816238<br/>
email:ha_heng@gmail.com
            </li>
          </ul>
        </div>
        <div className=" w-80 ml-20">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase ml-5">Connect with us</h2>
          <div> <img src="./src/assets/medsos.png" className="h-20 w-30" /> </div>
        </div>
        <div className=" w-80 ml-20">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase  ">pelayanan</h2>
          <div className="flex items-center">
          <ul className="text-abu  font-medium">
            <li className="mb-4 ">
              <a href="#" className="hover:underline">Grooming</a>
            </li>
            <li >
              <a href="#" className="hover:underline">Kesehatan</a>
            </li>
          </ul>
          <div>
          <ul className="text-abu  font-medium">
            <li className="mb-4 ml-5">
              <a href="#" className="hover:underline">Penitipan</a>
            </li>
            <li className="ml-5">
              <a href="#" className="hover:underline">Tentang kami</a>
            </li>
          </ul>
          </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  



        </div>
    )
}

export default Footer;