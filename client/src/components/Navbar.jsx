import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className='flex justify-between items-center w-full px-[100px] h-[8vh]'>
                <div className=''>
                    <img src={logo} alt="logo" className='h-[30px]' />
                </div>
                <div className='flex font-semibold text-lg gap-16'>
                    <Link to='/' className=''>Home</Link>
                    <Link to='/capsule' className=''>Capsule</Link>
                    <Link to='/settings' className=''>Settings</Link>
                    <Link to='/login' className=''>Login</Link>
                    <Link to='/signup' className=''>signup</Link>
                </div>
                
            </div>
    );
}

export default Navbar;
