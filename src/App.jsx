import './App.css'
import navImg from "./assets/logo.png";
import dollarImg from "./assets/dollar.png"


function App() {
  return (
    <>
      <div className="navbar sora-font max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='btn btn-ghost'>Home</li>
              <li className='btn btn-ghost'>Fixture</li>
              <li className='btn btn-ghost'>Teams</li>
              <li className='btn btn-ghost'>Schedules</li>
            </ul>
          </div>
          <a className="text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:gap-3 text-[#131313b3]">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex items-center font-semibold text-[#131313b3] btn btn-outline rounded-xl py-4 px-5 border-[#1313131a]'>
            <span>60000000000</span>
            <span className='mx-2'>Coin</span>
            <img className='w-6 h-6' src={dollarImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
