import React from 'react'
import SearchBar from './SearchBar'

import cart from '../../assets/svg/filled_cart.svg'
import Items from './items/Items'

function ShopItemsList() {
  return (
    <div className='w-[873px] mt-[13px]'>
      <div className='flex w-full gap-[10px]'>
        <SearchBar />
        <button className='flex h-[46px] items-center gap-[10px] bg-primary px-[54px] rounded-r-lg rounded-l-sm text-xl'><span className=''>0₽</span><img src={cart} alt="" className='w-5' /></button>
      </div>

      <div className='mt-[20px]'>
        <Items />
      </div>
    </div>
  )
}

export default ShopItemsList