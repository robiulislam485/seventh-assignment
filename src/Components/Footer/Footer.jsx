

const Footer = () => {
    return (
        <div>
            
            <div className=" bg-black  text-white mb-5">
            <div className=" max-w-7xl mx-auto flex items-center justify-center ">
            <img className="mt-40 mb-14"  src="./public/assets/logo-footer.png" alt="" />
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
            <hr />
        </div>
    );
};

export default Footer;