import '../admin.css'
import { FaCat, FaHistory } from "react-icons/fa";
import { HiChartPie, HiUser } from "react-icons/hi";
import TablePenitipan from '../component/tablepenitipan';
import Add from '../component/add';
import { GoArrowLeft } from "react-icons/go";
import { useState } from 'react';
import { Button } from 'flowbite-react';
const Admin = () =>{
    const [showAddForm, setShowAddForm] = useState(false);

  const handleToggleAddForm = () => {
    setShowAddForm((prev) => !prev);
  };
    return(
        <div>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0  w-[300px] overflow-y-auto text-center bg-[#fdd017] ">
            <div>
                <Button className='bg-opacity-0  text-slate-600  '><GoArrowLeft /> Logout</Button>
            </div>
            <div className="container-profile w-[280px] px-10 mt-5 h-52 flex justify-center">
            <div className="profile">
                    <img className='w-[100px] h-[100px] border-2 rounded-full mt-5 bg-white' src="./src/assets/suitman.png" alt="profile" />
                <div className="pp">
                <p className='mt-3 text-3xl font-semibold'>admin</p>
                </div>
            </div>
            </div>

            <div className="container-menu w-[280px]  flex  flex-col  h-52 mt-20">
            <div>
            <button className='w-[300px] text-left pl-10 relative py-3 text-[20px]   font-medium text-gray-800 mb-1 bg-lemon  hover:bg-slate-400 '><HiChartPie className='ml-52  my-1 fixed' /> Dasboard</button>
            </div>   
                <div>
            <button className='w-[300px] text-left pl-10 relative py-3 text-[20px]   font-medium text-gray-800 mb-1 bg-lemon  hover:bg-slate-400 '><HiUser className='ml-52  my-1 fixed' /> user</button>
            </div>
                <div>
            <button className='w-[300px] text-left pl-10 relative py-3 text-[20px]   font-medium text-gray-800 mb-1 bg-lemon  hover:bg-slate-400 '><FaCat className='ml-52  my-1 fixed' />penitipan</button>
            </div>
                <div>
            <button className='w-[300px] text-left pl-10 relative py-3 text-[20px]   font-medium text-gray-800 mb-1 bg-lemon  hover:bg-slate-400 '><FaHistory className='ml-52  my-1 fixed' />history</button>
            </div>
            </div>
        </div>
        <div>
        <TablePenitipan onButtonAdd={handleToggleAddForm} />
        
        {showAddForm && <Add onClose={handleToggleAddForm} />}
        </div>




        </div>
    )
}

export default Admin;