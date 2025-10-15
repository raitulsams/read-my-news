import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns'
const Header = () => {
    const today = format(new Date(), "EEEE, dd LLLL, yyyy")
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-4'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-accent'>{today}</p>
        </div>
    );
};

export default Header;