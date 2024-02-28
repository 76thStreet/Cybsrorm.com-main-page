import React from 'react'

import main_page_frame from "../../assets/main_page_frame.png"
import Shop from '../shop/Shop'

function MainPage() {
  return (
    <div className='mb-[27px] w-[1132px]'>
      <img src={main_page_frame} alt="Пополнение кошелька Турции/России через предметы Стим" />
      <div className='mt-[20px]'>
        <Shop />
      </div>
      <div className='my-10 text-lg font-medium'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
      </div>
    </div>
  )
}

export default MainPage