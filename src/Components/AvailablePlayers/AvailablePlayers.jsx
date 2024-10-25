import { useEffect, useState } from "react";
import Player from "../Player/Player";



const AvailablePlayers = () => {
   const [players , setPlayers] = useState([]);

  useEffect(()=>{
    fetch('players.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])
    


    return (
        <div>
            <div className="max-w-7xl mx-auto flex justify-between mt-20 mb-8">
                <h3 className="text-xl font-bold">Available Players</h3>
                <div className="flex gap-2 px-6 py-2 bg-yellow-400">
                    <button >Available</button>
                    <button>Selected</button>
                </div>
            </div>
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-48">
           {
                players.map(player=><Player key={player.id} player={player}></Player> )
            }
           </div>
            
        </div>
    );
};

export default AvailablePlayers;