
const Header = () => {
    const bgImage = "https://i.ibb.co.com/87XnGbs/bg-shadow.png";
    return (
        <div className="max-w-7xl mx-auto mt-8 mb-6">
            <nav className="flex justify-between items-center">
                <img src="./src/assets/logo.png" alt="" />
                <div>
                    <ul className="flex gap-12 items-center text-gray-500">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Schedule</a></li>
                        <p className="px-7 py-2 border-2 rounded-lg shadow-sm flex items-center gap-2"> 0 Coin <img src="./src/assets/coin.png" alt="" /></p>
                    </ul>
                </div>
            </nav>   
            <div className={`max-w-7xl mx-auto  justify-center bg-no-repeat bg-cover bg-center rounded-lg mt-6 space-y-6 `}
                style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="flex flex-col items center text-center justify-center p-14 space-y-6">
                    <img className="w-52 mx-auto" src="./src/assets/banner-main.png" alt="" />
                   <div className="space-y-6">
                   <h1 className="text-3xl text-black font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-lg text-gray-700 font-semibold">Beyond Boundaries Beyond Limits</p>
                    <button className="bg-[#E7FE29] px-4 py-2 rounded-md text-black">Claim Free Credit</button>
                   </div>
                </div>
            </div>
            </div>
       
    );
};

export default Header;