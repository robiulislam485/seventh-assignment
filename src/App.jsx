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
import Banner from './Components/Banner/Banner'

function App() {
  const [coin, setCoins] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const freeCoinClaim = (coins) => {
    const newCoins = coin + coins;
    setCoins(newCoins);
    toast.success('Congrates! coin is added')
  }
  
  const activeHandler = (status) => {
   setIsActive(!status)
  }
  const handleDecreasePrice = (price) => {
    setCoins(coin - price);
  }
  const selectedPlayerHandler = (players) => {
    const isExist = selectedPlayer.find((player) => player.id == players.id);
    if (isExist) {
      toast.error('Congrates! player Already Added!')
    }
    else if (selectedPlayer.length === 6){
    toast.error('Not enough space')
    }
    else if (players.price > coin) {
      toast.error('Not enough money!')
    }
    else {
      handleDecreasePrice(players.price)
      const newSelectedPlayer = [...selectedPlayer, players];
      setSelectedPlayer(newSelectedPlayer);
      toast.success('Congrates! Player added succesfully.')
    }
    
  }
  const handleDelete = (id, price) => {
    setCoins(coin + price);
    const remainingPlayer = selectedPlayer.filter((p) => p.id !== id);
    setSelectedPlayer(remainingPlayer);
    toast.success('Congrates! player removed succesfully.')
   
  }
  return (
    <>
      <Header  coin={coin}></Header>
      <Banner freeCoinClaim={freeCoinClaim}></Banner>
      <AvailablePlayersBtn activeHandler={activeHandler} isActive={isActive} selectedPlayer={selectedPlayer.length}></AvailablePlayersBtn>
      {
        isActive ? <AvailablePlayers selectedPlayerHandler={selectedPlayerHandler}></AvailablePlayers> :
          <SelectedPlayers activeHandler={activeHandler} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SelectedPlayers>
      }
      <div className='absolute z-40 ml-72 -mt-52'>
        <Subscribe></Subscribe>
      </div>
      <div className='relative'>
        <Footer></Footer>
      </div>
      <ToastContainer position="top-center"/>
    </>
      )
}

export default App
