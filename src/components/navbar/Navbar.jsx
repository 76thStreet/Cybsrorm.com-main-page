import React from 'react'

import website_logo from "../../assets/website_logo.png"
import steam_logo from "../../assets/steam_logo.png"

const games_list = [
  "CS:GO"
]

const Navbar = () => {
  return (
    <nav className='flex items-center h-16 my-[10px] shadow-lg justify-between'>
      <div className='w-[216px] flex justify-between items-center pr-[23px]'>
        <img src={website_logo} alt="Cybsrorm.com" />
        <p className='text-[22px]'>Cybsrorm.com</p>
        <button className='flex gap-8 px-3 ml-3'>
          {games_list.map((game) => <Games key={game}>{game}</Games>)}
        </button>
      </div>

      <button className='flex gap-1 px-3 py-4 bg-primary rounded-xl text-[22px] font-semibold'>
        <p>Авторизоваться</p>
        <img src={steam_logo} alt="Steam" />
      </button>
    </nav>
  )
}

const Games = ({ children }) => {
  return (
    <>
      <div className='text-primary text-[22px] font-semibold'>
        <p className=''>{children}</p>
        <div className='mt-[12px] h-[4px] w-auto bg-primary rounded-t-xl'></div>
      </div>
    </>
  )
}
export default Navbar