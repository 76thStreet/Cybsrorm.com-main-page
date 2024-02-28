import React, { useState } from 'react'

import cart from "../../assets/svg/cart.svg"
import help from "../../assets/svg/help.svg"
import history from "../../assets/svg/history.svg"
import money_hand from "../../assets/svg/money-hand.svg"

const Sidebar = () => {
  return (
    <div className='max-w-[273px] w-[273px] h-full'>
      <div className='my-[27px] mx-5 text-[#FFFFFF66] text-xs'>
        <h3>ОСНОВНОЕ</h3>
      </div>
      <ul>
        <MenuItem
          link_to="#"
          img_src={cart}
          img_alt="cart"
          para="Покупка"
        />
        <MenuItem
          link_to="#"
          img_src={help}
          img_alt="help"
          para="Помощь"
        />
        <MenuItem
          link_to="#"
          img_src={money_hand}
          img_alt="money_hand"
          para="Продажа"
        />
        <MenuItem
          link_to="#"
          img_src={history}
          img_alt="history"
          para="История"
        />
      </ul>
    </div>
  )
}

function MenuItem({ link_to, img_src, img_alt, para }) {
  const [hover, setHover] = useState(false);

  return (
    <li
      className='flex items-center py-4 hover:bg-gradient-to-r hover:from-[#4452FE4D] hover:to-[#4452FE00] hover:text-white text-[#FFFFFF66]'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`h-[32px] w-[5px] ${hover ? 'h-[32px] rounded-r-lg bg-primary' : ''}`} />
      <a href={link_to} className='flex items-center gap-5 pl-4'>
        <img src={img_src} alt={img_alt} className='float-left' />
        <p>{para}</p>
      </a>
    </li>
  );
}

export default Sidebar