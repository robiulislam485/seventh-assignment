import bannerImage from '../../assets/banner-main.png'
const Banner = ({coin,freeCoinClaim}) => {
    const bgImage = "https://i.ibb.co.com/87XnGbs/bg-shadow.png";
    return (
        <div className={`max-w-7xl mx-auto  justify-center bg-no-repeat bg-cover bg-center rounded-lg mt-6 space-y-6`}
                style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="flex flex-col items center text-center justify-center p-14 space-y-6">
                    <img className="w-52 mx-auto" src={bannerImage} alt="" />
                   <div className="space-y-6">
                   <h1 className="text-3xl text-black font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-lg text-gray-700 font-semibold">Beyond Boundaries Beyond Limits</p>
                    <button onClick={()=>freeCoinClaim(600000)} className="bg-[#E7FE29] px-4 py-2 rounded-md text-black">Claim Free Credit</button>
                   </div>
                </div>
            </div>
    );
};

export default Banner;