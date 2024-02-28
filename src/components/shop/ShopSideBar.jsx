import React, { useState } from 'react'

function ShopSideBar() {

  const [more, setMore] = useState(false)
  const [showPrice, setShowPrice] = useState(false);
  const [showDeliverySpeed, setShowDeliverySpeed] = useState(false);
  const [showNotImplemented, setShowNotImplemented] = useState(false)

  const handleMoreClick = (event, func) => {
    event.preventDefault();
    setMore((prevValue) => !prevValue);
    event.currentTarget.textContent = more ? '—' : '+';

    func((prevValue) => !prevValue)
  };

  return (
    <div className='py-[27px] px-5 w-[220px] h-full'>
      <p className='font-semibold'>Фильтры</p>
      <div className='h-px bg-background mt-[10px] mb-[20px]' />

      <div className='text-base font-normal'>
        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Цена</p>
          <button onClick={(e) => handleMoreClick(e, setShowPrice)} className="">—</button>
        </div>
        {showPrice &&
          <div>
            <form className='pt-[10px] flex justify-between'>
              <input type="text" className='w-[70px] h-[30px] bg-[#FFFFFF0A] placeholder:text-base' placeholder='₽ 0.00' />
              <p>-</p>
              <input type="text" className='w-[70px] h-[30px] bg-[#FFFFFF0A] placeholder:text-base' placeholder='₽ ∞' />
            </form>
            <div className='h-px bg-background my-[20px]' />
          </div>}

        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Скорость доставки</p>
          <button onClick={(e) => handleMoreClick(e, setShowDeliverySpeed)} className="">—</button>
        </div>
        {showDeliverySpeed &&
          <div>
            <form className='pt-[10px] flex flex-col gap-[10px]'>
              <label className='flex items-center gap-[10px]' htmlFor='instant'>
                <input type="checkbox" id='instant' className="checkbox_white" />
                <p className=' text-[#FFFFFF66]'>Мгновенно</p>
              </label>
              <label className='flex items-center gap-[10px]' htmlFor='fifteenminutes'>
                <input type="checkbox" id='fifteenminutes' className="checkbox_white" />
                <p className=' text-[#FFFFFF66]'>Около 15 минут</p>
              </label>
            </form>
            <div className='h-px bg-background my-[20px]' />
          </div>}
        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Тип</p>
          <button onClick={(e) => handleMoreClick(e, setShowNotImplemented)} className="">—</button>
        </div>

        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Качество</p>
          <button onClick={(e) => handleMoreClick(e, setShowNotImplemented)} className="">—</button>
        </div>

        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Цвет</p>
          <button onClick={(e) => handleMoreClick(e, setShowNotImplemented)} className="">—</button>
        </div>

        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Редкость</p>
          <button onClick={(e) => handleMoreClick(e, setShowNotImplemented)} className="">—</button>
        </div>

        <div className='flex items-end justify-between mb-[20px]'>
          <p className=''>Коллекция</p>
          <button onClick={(e) => handleMoreClick(e, setShowNotImplemented)} className="">—</button>
        </div>

        {showNotImplemented && <div className='text-xs text-red-400 '>that was not implemented yet!</div>}
      </div>
    </div>
  )
}

export default ShopSideBar