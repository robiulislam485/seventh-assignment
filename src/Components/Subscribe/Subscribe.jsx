const Subscribe = () => {
    const bgImage = "https://i.ibb.co.com/87XnGbs/bg-shadow.png";
    return (
        <div className="border-2 p-5 rounded-md">
            <div className={`max-w-7xl mx-auto  justify-center bg-no-repeat bg-cover bg-center rounded-lg space-y-6 border-2 `}
                style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="text-center space-y-6 lg:px-60 lg:py-20">
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
        </div>
    );
};

export default Subscribe;