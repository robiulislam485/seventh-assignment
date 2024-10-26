import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './AvailablePlayers.css'



const AvailablePlayers = ({selectedPlayerHandler}) => {
   
   const [players , setPlayers] = useState([]);

  useEffect(()=>{
    fetch('players.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])
    


    return (
        <div>
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-48">
           {
                players.map(player=><Player selectedPlayerHandler={selectedPlayerHandler} key={player.id} player={player}></Player> )
            }
           </div>
            
        </div>
    );
};

export default AvailablePlayers;