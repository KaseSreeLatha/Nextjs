import Image from 'next/image';
import logo from '../../../public/amazom.png'
import { useSession, signIn, signOut } from 'next-auth/react';
import Searchbar from './searchbar'
import Location from './location'
import Language from './language';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();
  return (
      <div className="flex items-center justify-between bg-[#131921] text-white px-2">
        <div className='flex items-center space-x-10'>
          <Link href='/' passHref>
          <Image
            src={logo}
            alt="Amazon Logo"
            width={100}
            height={40}
            className='mt-4'
          />
          </Link>
          <Location/>
        </div>
        <Searchbar/>
        <Language/>
        <div className="flex space-x-6 ml-5">
          {session?(
            <div className="flex items-center space-x-6 cursor-pointer">
            <span className="font-bold">{session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="text-blue-500 hover:underline font-medium">
              Sign Out
            </button>
          </div>
          ):(
            <button
              onClick={() => signIn('google')}
              className="font-medium cursor-pointer">
              Hello, <span className='text-blue-500 hover:underline'>Sign in</span>
            </button>
          )}
          <div className="font-medium cursor-pointer">Returns & Orders</div>
          <div className="flex items-center cursor-pointer">
            <span className="font-medium">Cart</span>
            <span className="bg-[#f08804] rounded-full text-black text-xs w-4 h-4 flex items-center justify-center ml-1">0</span>
          </div>
        </div>
      </div>
  );
};

export default Navbar;