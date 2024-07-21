import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className='flex justify-between items-center w-full px-[100px]'>
                <div className=''>
                    <img src={logo} alt="logo" className='h-[40px]' />
                </div>
                <div className='flex font-semibold text-lg gap-16'>
                    <Link to='/' className=''>Home</Link>
                    <Link to='/' className=''>About</Link>
                    <Link to='/' className=''>Services</Link>
                    <Link to='/' className=''>Contact</Link>
                    <Link to='/settings' className=''>Setting</Link>
                </div>
                <div className='md:hidden'>
                    <button className='text-white focus:outline-none'>
                        <svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                            <path d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>
            </div>
    );
}

export default Navbar;
