import React from 'react'

import mac_10 from "../../../assets/MAC_10_NeonRider.png"
import cart from '../../../assets/svg/filled_cart.svg'

function Items() {

  const itemsData = Array.from({ length: 30 }, (_, index) => ({
    name: `StatTrak™ MAC-10 | Neon Rider`,
    img: mac_10,
    price: 200,
  }));

  return (
    <div className='grid w-full h-[795px] overflow-scroll overflow-x-hidden grid-cols-5 gap-5 auto-rows-auto no-scrollbar'>
      {itemsData.map(({ name, img, price }, index) => (
        <SingleItem key={index} item_name={name} item_img={img} price_in_rub={price} />
      ))}
    </div>
  );
};

function SingleItem({ item_name, item_img, price_in_rub }) {


  return (
    <button className='w-[159px] h-[198px] bg-[#4452FE99] flex justify-center items-center rounded-2xl flex-col'>
      <p className='z-20 w-32 mt-4 text-xs text-center'>
        {item_name}
      </p>
      <img src={item_img} alt="" className='z-20 w-[100px] drop-shadow-xl' />
      <div className='z-20 flex justify-between items-center w-full px-4 text-[14px] pb-[7px]'>
        <p className='text-start'>
          {price_in_rub} ₽ <br />
          <span className='text-[#F2994A]'>
            {(price_in_rub / 5).toFixed(2)} TL
          </span>
        </p>
        <img src={cart} alt="" className='z-20' />
      </div>
    </button>
  )
}
export default Items