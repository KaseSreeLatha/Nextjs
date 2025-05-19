import React from 'react'
import logo from '../../../../public/logo.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-blue-200 flex justify-between p-4 px-20'>
        <div>
            <p className='font-bold p-2'>DAILY MART</p>
            <Image src={logo} alt="logo" className='w-28 h-28 rounded-2xl'/>
        </div>
        <div>
            <p className='font-bold'>Contact:</p>
            <p><b>Email: </b>daily.mart@gmail.com</p>
            <p><b>Phone No: </b>+91 9999988777</p>
        </div>
        <div>
            <p className='font-bold'>Quick Links</p>
        </div>
    </div>
  )
}

export default Footer;