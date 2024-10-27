import logo from '../../assets/logo.png'
import coinPhoto from '../../assets/coin.png'

const Header = ({coin}) => {
    
    return (
        <div className="max-w-7xl mx-auto mt-8 mb-6 sticky top-0 bg-opacity-50 backdrop-blur-sm">
           
           <nav className="flex justify-between items-center">
                <img src={logo} alt="" />
                <div>
                    <ul className="flex gap-12 items-center text-gray-500">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Schedule</a></li>
                        <p className="px-7 py-2 border-2 rounded-lg shadow-sm flex items-center gap-2"> {coin} Coin <img src={coinPhoto} alt="" /></p>
                    </ul>
                </div>
            </nav> 
            </div>  

            
       
       
    );
};

export default Header;