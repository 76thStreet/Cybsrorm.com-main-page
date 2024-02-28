import React from 'react'

import website_logo from "../../assets/website_logo.png"
import facebook from "../../assets/social_media/facebook.png"
import telegram from "../../assets/social_media/telegram.png"
import twitter from "../../assets/social_media/twitter.png"
import vk from "../../assets/social_media/vk.png"

const Footer = () => {
  return (
    <footer className='w-auto h-auto'>
      <div className='grid justify-between grid-cols-6 p-16'>
        <div className='flex flex-col col-span-3 gap-7'>
          <div className='flex items-center'>
            <img src={website_logo} alt="Cybsrorm.com" />
            <p className='text-4xl '>Cybsrorm.com</p>
          </div>
          <p className='font-semibold'>Cоциальный киберспортивный портал, регулярные турниры,<br /> инди-игры и игровые трансляции</p>
          <div className='flex gap-5'>
            <img src={telegram} alt="telegram" />
            <img src={vk} alt="vk" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className='flex flex-col w-fit gap-y-2'>
          <div className='text-xl font-semibold'>Разделы:</div>
          <div className='h-[4px] w-auto bg-primary rounded-sm'></div>
          <ul className='flex flex-col gap-4 mt-4'>
            <li><a href="#" className='font-normal'>Купить</a></li>
            <li><a href="#" className='font-normal'>Продать</a></li>
            <li><a href="#" className='font-normal'>История</a></li>
          </ul>
        </div>
        <div className='flex flex-col w-fit gap-y-2'>
          <div className='text-xl font-semibold'>Дополнительно:</div>
          <div className='h-[4px] w-auto bg-primary rounded-sm'></div>
          <ul className='flex flex-col gap-4 mt-4'>
            <li><a href="#" className='font-normal'>Личный кабинет</a></li>
            <li><a href="#" className='font-normal'>Помощь</a></li>
          </ul>
        </div>
        <div className='flex flex-col w-fit gap-y-2'>
          <div className='text-xl font-semibold'>Информация:</div>
          <div className='h-[4px] w-auto bg-primary rounded-sm'></div>
          <ul className='flex flex-col gap-4 mt-4'>
            <li><a href="#" className='font-normal'>Пользовательское соглашение</a></li>
            <li><a href="#" className='font-normal'>Политика приватности</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer