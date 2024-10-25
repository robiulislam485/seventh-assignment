

const Footer = () => {
    const bgImage = "https://i.ibb.co.com/87XnGbs/bg-shadow.png";
    return (
        <div>
            <div className={`max-w-7xl mx-auto  justify-center bg-no-repeat bg-cover bg-center rounded-lg mt-6 space-y-6 border-2 `}
                style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="text-center space-y-6 px-60 py-20">
                    <h1 className="text-3xl text-black font-bold">Subscribe to our Newsletter</h1>
                    <p className="text-sm font-bold text-gray-600">Get the latest updates and news right in your inbox!</p>
                    <div className="flex justify-center items-center gap-4">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className="px-6 py-3 rounded-md text-black font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-400">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className=" bg-black  text-white">
            <div className=" max-w-7xl mx-auto flex items-center justify-center ">
            <img className="mt-32 mb-14"  src="./src/assets/logo-footer.png" alt="" />
            </div>
         <div className="flex justify-between  max-w-7xl mx-auto gap-8 p-20">
            <div>
                <h2 className="text-lg font-bold">About Us</h2>
                <p className="text-sm font-semibold text-gray-600 mt-6">We are a passionate team dedicated to providing the <br />best services to our customers.</p>
            </div>
            <div>
                <h2 className="text-lg font-bold"> Quick Links</h2>
                <ol className="text-lg font-semibold text-gray-600 mt-6 space-y-2 ">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ol>
            </div>
            <div>
                  <h2  className="text-lg font-bold">Subscribe</h2>
                  <p className="text-sm font-semibold text-gray-600 mt-6">Subscribe to our newsletter for the <br /> latest updates.</p>
                  <div className="flex justify-center items-center mt-6">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className="px-4 py-3 text-black font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-400">
                            Subscribe
                        </button>
                    </div>
            </div>
         </div>
            </div>
        </div>
    );
};

export default Footer;