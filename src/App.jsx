import './App.css'
import Header from './Components/Header/Header'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import AvailablePlayersBtn from './Components/AvailablePlayersBtn/AvailablePlayersBtn'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  const [coin, setCoins] = useState(0);
  const [isActive, setIsActive] = useState({ cart: true });
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const freeCoinClaim = (coins) => {
    const newCoins = coin + coins;
    setCoins(newCoins);
    toast.success('Coin is added')
  }
  const activeHandler = (status) => {
    if (status == "available") {
      setIsActive({ cart: true })
    }
    else {
      setIsActive({ cart: false })
    }
  }
  const handleDecreasePrice = (price) => {
    setCoins(coin - price);
  }
  const selectedPlayerHandler = (players) => {
    const isExist = selectedPlayer.find((player) => player.id == players.id);
    if (isExist) {
      toast.error('Player Already Added!')
    }
    else if (players.price > coin) {
      toast.error('Not enough money!')
    }
    else {
      handleDecreasePrice(players.price)
      const newSelectedPlayer = [...selectedPlayer, players];
      setSelectedPlayer(newSelectedPlayer);
      toast.success('Player added succesfully.')
    }
    
  }
  const handleDelete = (id, price) => {
    setCoins(coin + price);
    const remainingPlayer = selectedPlayer.filter((p) => p.id !== id);
    setSelectedPlayer(remainingPlayer);
    toast.success('Player removed succesfully.')
   
  }




  return (
    <>
      <Header coin={coin} freeCoinClaim={freeCoinClaim}></Header>
      <AvailablePlayersBtn activeHandler={activeHandler} isActive={isActive} selectedPlayer={selectedPlayer.length}></AvailablePlayersBtn>
      {
        isActive.cart ? <AvailablePlayers selectedPlayerHandler={selectedPlayerHandler}></AvailablePlayers> :
          <SelectedPlayers activeHandler={activeHandler} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SelectedPlayers>
      }
      <div className='absolute z-40 ml-72 -mt-52'>
        <Subscribe></Subscribe>
      </div>
      <div className='relative'>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
