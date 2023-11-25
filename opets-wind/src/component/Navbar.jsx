import '../index.css';
import "tailwindcss/tailwind.css"
import logo from "../assets/logowhite.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate()
    return(
            <nav>
        <div className="bg-fixed">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-between px-4  lg:py-0 border-b lg:border-b-0 ">
            <div>
              <a href="#" className="uppercase font-semibold text-white  "><img src={logo} alt="" /></a>
            </div>
            <div>
              <button className="focus:outline-none block px-4 py-4 lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg></button>
            </div>
          </div>
          <div className="flex flex-col  lg:flex-row items-center justify-between w-full">
            <div className="flex flex-col  lg:flex-row">
              <a href="#" onClick={() => Navigate('/')} className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black active: border-b-2-black ">dasboard</a>
              <a href="#"onClick={() => Navigate('/Layanan')}  className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black">layanan</a>
              <a href="#" onClick={() => Navigate('/Tentang')} className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black">about us</a>
              <a href="#" onClick={() => Navigate('/Input')} className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black">input data</a>
            </div>
            <div className='px-2'>
              <button className='bg-fixed bg-orange-300 rounded-full px-5 mr-5 w-20 h-10 flex items-center lg:py-5 font-medium text-orange-950 hover:text-white '>Login</button>
            </div>
          </div>
        </div>
      </div>
      </nav>
    )
}

export default Navbar;