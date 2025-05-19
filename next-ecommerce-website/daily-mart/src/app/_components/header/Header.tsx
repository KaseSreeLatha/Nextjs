import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/logo.png'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className=' bg-blue-200 p-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
        <Image src={logo} alt='logo' className='rounded-full w-16 h-16'/>
        <p className='text-3xl font-extrabold'>DAILY MART</p>
        </div>
        <button>
        <UserCircleIcon className='w-12 h-12'/>
        <p className='text-sm text-center font-semibold'>Profile</p>
        </button>
    </div>
  )
}

export default Header;