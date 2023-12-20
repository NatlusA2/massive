
import { Button ,Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { useEffect,useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const TablePenitipan = ({onButtonAdd}) => {
    const Navigate = useNavigate()
    const [showAddForm, setShowAddForm] = useState(false);
  
    const handleToggleAddForm = () => {
      setShowAddForm((prev) => !prev);
    };
    
const [penitipan, setpenitipan] = useState([]);
    useEffect(() =>{
        const fetchAllPenitipan = async () => {
            try{
                const res = await axios.get("http://localhost:5000/penitipan");
                // console.log(res.data);
                setpenitipan(res.data)
            }catch(err){
                console.log(err);
            }
        };
        fetchAllPenitipan();
    }, []);

  return (
    <div>

    <div className="overflow-y-hidden over w-[50rem] ml-[350px] mt-[1rem] ">
    <h1 className='text-abu text-[40px] '>Data penitipan</h1>
        <div className="flex flex-wrap justify-end my-[30px] ">
        <Button onClick={onButtonAdd} className='bg-lemon text-slate-600 hover:text-white '>  Tambah Data <FaPlus className='ml-[10px]' /> </Button>
        </div>
      <Table className='mt-[20px] overflow-y-scroll' hoverable>
        <TableHead>
          <TableHeadCell>No</TableHeadCell>  
          <TableHeadCell>Nama penitipan</TableHeadCell>
          <TableHeadCell>nama pemilik</TableHeadCell>
          <TableHeadCell>alamat</TableHeadCell>
          <TableHeadCell>nomor hp</TableHeadCell>
          <TableHeadCell>pelayanan</TableHeadCell>
          
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
          
        </TableHead>
        <TableBody className="divide-y">
          {
            penitipan.map((penitipan, i) =>{
                return(
                    <TableRow key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            
            <TableCell>{i + 1}</TableCell>
            <TableCell>{penitipan.nama_penitipan}</TableCell>
            <TableCell>{penitipan.nama_pemilik}</TableCell>
            <TableCell>{penitipan.alamat}</TableCell>
            <TableCell>{penitipan.no_hp}</TableCell>
            <TableCell>{penitipan.pelayanan}</TableCell>
            <TableCell>
              <a href="#"  className="font-medium  text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
           
            </TableCell>
          </TableRow>
                )
            })
          
            }
    
        </TableBody>
      </Table>
    </div>
    </div>
  );
}

export default TablePenitipan;