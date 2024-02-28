import React from 'react'
import ShopSideBar from './ShopSideBar'
import ShopItemsList from './ShopItemsList'

function Shop() {
  return (
    <div className='bg-[#FFFFFF0A] rounded-md h-[874px] flex gap-x-5'>
      <ShopSideBar />
      <ShopItemsList />
    </div>
  )
}

export default Shop