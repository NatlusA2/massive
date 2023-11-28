import Navbar from "../component/Navbar";
import { useNavigate } from 'react-router-dom';
import '../App.css'
import HeroLayanan from "../component/Hero-layanan";
import Tentangkami from "../component/tentang";
import Bawah from "../component/footer";
import Footer from "../component/footerinfo";
import Cara from "../component/Carakerja";
const Layanan = () => {
    
return(
    <div>
    <div className="bg-opet">
    <Navbar />
    </div>
    <div>
        <HeroLayanan />
    </div>
    <div>
    <Tentangkami />
    </div>
    <div className="bg-lemon">
    <Cara />
    </div>
    <Footer />
    <Bawah />
    
    </div>
)
}

export default Layanan;