import '../index.css';
import "tailwindcss/tailwind.css"
import logo from "../assets/logowhite.png"
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import React, {useState} from 'react';

const Navbar = ({onLoginButtonClick}) => {
  const Navigate = useNavigate()
  
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleToggleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

    return(
      <div>
  <nav>
    <div className="bg-fix">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center pl-14 lg:py-0 border-b lg:border-b-0">
          <div>
            <a href="#" className="uppercase font-semibold text-white">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="lg:hidden">
            <button className="focus:outline-none px-4 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row">
            <a
              href="#"
              onClick={() => Navigate('/')}
              className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black active: border-b-2-black"
            >
              beranda
            </a>
            <a
              href="#"
              onClick={() => Navigate('/Layanan')}
              className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black"
            >
              layanan
            </a>
            {/* <a
              href="#"
              onClick={() => Navigate('/Tentang')}
              className="block px-4 py-3 lg:py-5 font-medium text-orange-50 hover:text-black"
            >
              about us
            </a> */}
          </div>
          <div className="  lg:ml-auto">
            <button
              onClick={onLoginButtonClick}
              className="bg-fixed bg-orange-300 rounded-full px-5 mr-20 w-20 h-10 flex items-center lg:py-5 font-medium text-orange-950 hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>

    
    )
}

export default Navbar;