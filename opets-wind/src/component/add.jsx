import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Button } from "flowbite-react";
import axios from "axios"

const Add = ({ onClose }) => {
    const Navigate = useNavigate()
 
    const [penitipan, setpenitipan] = useState({
        nama_penitipan: "",
        nama_pemilik: "",
        alamat: "",
        no_hp: "",
        pelayanan: "",
    });     
    const handleChange = (e) => {
        setpenitipan((prev) => ({...prev, [e.target.name]: e.target.value }));
    }
    
    const handleclick = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/create", penitipan);
            console.log("berhasil");
            onClose();
        }catch(err){
            console.log(err);
        }
    };
    const handleclose = () => {

        onClose();
    }    

    

    return(
        <div>
             <div className='form fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800  z-10 bg-opacity-75'>
             <div className='w-[30rem] bg-white p-6 rounded-md  flex flex-col items-center '>
                <h1 className="text-center text-[30px] text-slate-600 font-semibold mb-6">input data</h1>
                
               
                 <input type="text" onChange={handleChange} className="w-full p-2 mb-4 border rounded-md" id="nama_penitipan" placeholder="Nama Penitipan" name="nama_penitipan"  />
                 
                 <input type="text" onChange={handleChange} required className="w-full p-2 mb-4 border rounded-md" id="nama_pemilik" placeholder="Nama Pemilik" name="nama_pemilik" />
                              
                 <input type="text" onChange={handleChange} required className="w-full p-2 mb-4 border rounded-md" id="alamat" placeholder="Alamat" name="alamat" />
                  
                 <input type="text" onChange={handleChange} required className="w-full p-2 mb-4 border rounded-md" id="no_hp" placeholder="Nomor Handphone" name="no_hp" />
                          
                 <input type="text" onChange={handleChange} required className="w-full p-2 mb-4 border rounded-md" id="pelayanan" placeholder="Pelayanan" name="pelayanan" />
             
                

                 <div className="flex justify-center">
                <Button className="w-[150px]"  onClick={handleclick}>Submit</Button>
                <Button className="w-[150px] ml-5"  onClick={handleclose}>cancel</Button>
                </div>
            </div>

             </div>
        </div>
    )
}

export default Add;