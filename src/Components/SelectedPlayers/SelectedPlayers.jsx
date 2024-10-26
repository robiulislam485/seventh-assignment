/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
const SelectedPlayers = ({selectedPlayer,handleDelete}) => {
    
    return (
        <div className="max-w-7xl mx-auto space-y-3">
            {
                selectedPlayer.map((player) => (<div key={player.id} className=" border-2 p-4 rounded-md shadow-sm">
                    <div className="flex justify-between items-center ">
                        <div className="flex gap-3">
                            <img className="w-20 rounded-md" src={player.player_image} alt="" />
                            <div>
                                <h1 className="text-lg font-bold">{player.name}</h1>
                                <p className="text-sm text-gray-500">{player.left_or_right_hand}</p>
                            </div>
                        </div>
                        <button onClick={()=>handleDelete(player.id, player.price)} className="text-4xl btn "><MdDeleteForever /></button>
                    </div>
                </div>))
            }
            <button   className="bg-[#E7FE29] px-4 py-2 rounded-md text-black font-semibold">Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;

