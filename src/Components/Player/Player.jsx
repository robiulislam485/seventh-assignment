import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Player = ({player, selectedPlayerHandler}) => {
    const { player_image, name, country_name, category, left_or_right_hand, price } = player;

    return (
         
       <div className="space-y-4  border-2 p-8 rounded-lg shadow-sm">
            <img className="w-70 rounded-lg" src={player_image} alt="" />
            <h3 className="flex items-center gap-2 text-lg font-semibold"><FaUserAlt></FaUserAlt>{name}</h3>
            <div className="flex  justify-between items-center">
                <p className="flex items-center gap-2 text-sm text-gray-600"><FaFlag></FaFlag> {country_name}</p>
                <p className="text-sm text-black bg-gray-200 p-2 rounded-md">{category}</p>
            </div>
            <hr />
            <p className="text-sm font-semibold">Rating</p>
            <div className="flex  justify-between items-center">
                <p className="text-sm font-bold text-black">Players type</p>
                <p className="text-gray-600">{left_or_right_hand}</p>
            </div>
            <div className="flex  justify-between items-center">
                <p className="text-sm font-bold text-black">Price: ${price}</p>
                <button onClick={()=>selectedPlayerHandler(player)} className="px-2 py-1 text-gray-600 border-2 rounded-md hover:bg-[#E7FE29]">Choose Player</button>
            </div>
       </div>
        
    );
};

export default Player;
