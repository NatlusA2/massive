const HeroLayanan = () => {
    return(
        <div className="bg-lemon h-72 flex items-center">
         <div className="container flex items-center justify-center gap-60">
            <div className="desc bg-white w-96 h-44 p-5">
                <h1 className="text-center text-2xl font-semibold mb-4">OPETS hadir memberi solusi</h1>
                <p className="text-abu">Kami hadir untuk memudahkan pemilik hewan peliharaan menemukan penitipan yang menyenangkan dan aman.</p>
            </div>
            <div> <img src="./src/assets/herolayanan.png" className="h-52" /></div>
           </div>
        </div>
    )
}

export default HeroLayanan;