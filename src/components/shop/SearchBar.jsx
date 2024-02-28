import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-[10px] w-full items-center'>
      <div className="relative w-full rounded-l-lg rounded-r-sm shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500 sm:text-sm">🔎︎</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full h-[46px] rounded-r-sm rounded-l-lg border-0 py-[11px] pl-7 pr-20 bg-[#FFFFFF0A] text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Поиск..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full py-0 pl-2 text-white bg-transparent border-0 rounded-l-lg rounded-r-sm pr-7 sm:text-sm"
          >
            <option className="text-black">₽ RUB</option>
            <option className="text-black">₺ TL</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBar