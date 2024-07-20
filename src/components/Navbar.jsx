import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='h-16 w-full p-3 md:h-20 md:w-auto '>
                    <span className='flex justify-start items-end h-3/4 w-auto '><img src="logo.png" alt="logo" className='h-3/4 w-auto ' /></span>
                </div>
                <div className='hidden md:flex space-x-4'>
                    <span href="#" className='hover:bg-gray-700 p-2 rounded'>Home</span>
                    <span href="#" className='hover:bg-gray-700 p-2 rounded'>About</span>
                    <span href="#" className='hover:bg-gray-700 p-2 rounded'>Services</span>
                    <span href="#" className='hover:bg-gray-700 p-2 rounded'>Contact</span>
                </div>
                <div className='md:hidden'>
                    <button className='text-white focus:outline-none'>
                        <svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                            <path d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
