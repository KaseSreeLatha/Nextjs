import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const searchbar = () => {
  return (
    <div className="flex items-center w-96">
        <input
            type="text"
            className="w-full p-2 rounded-l-md border-none text-black outline-none"
            placeholder="Search Amazon.in"
        />
        <button className="p-2 bg-[#febd69] rounded-r-md"><MagnifyingGlassIcon className='w-6 h-6'/></button>
    </div>
  )
}

export default searchbar