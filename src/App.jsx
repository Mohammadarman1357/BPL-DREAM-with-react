import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense, useState } from 'react';

const fetchPlayers = async () => {
  const res = await fetch("/player.json")
  return res.json()
}

const playerPromise = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasePlayers, setPurchasePlayers] = useState([])

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center sora-font'>
        <h1 className='font-bold text-2xl'>Available Players</h1>

        <div>

          <button onClick={() => setToggle(true)} className={`px-6 py-3 border-1 border-r-0 border-gray-400 rounded-l-2xl font-bold ${toggle === true ? "bg-[#e7fe29]" : "bg-none"}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`px-6 py-3 border-1 border-l-0 border-gray-400 rounded-r-2xl font-bold ${toggle === false ? "bg-[#e7fe29]" : "bg-none"}`}>Selected <span>(0)</span></button>

        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers purchasePlayers={purchasePlayers}></SelectedPlayers>
      }

    </>
  )
}

export default App;
