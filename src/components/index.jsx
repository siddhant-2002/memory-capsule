import React from 'react'
import Navbar from './Navbar'
import Feed from './Feed'

export const Main = () => {
  return (
    <div className='h-[100vh] w-[100vw] grid lg:grid-cols-8 bg-white gap-y-6 gap-x-6 p-12 grid-col'>
        <div className='lg:col-span-8 bg-gray-400 rounded-2xl flex place-content-center'>
            {/* <h1 className='text-4xl font-bold'>Navbar here</h1> */}
            <Navbar />
        </div>
        <div className='lg:col-span-6 lg:h-full bg-blue-500 row-span-8 rounded-2xl flex place-content-center overflow-y-hidden border-2'>
            <Feed />
        </div>
        <div className='lg:col-span-2 lg:h-full bg-green-500 row-span-8 rounded-2xl flex place-content-center'>
            <h1 className='text-4xl font-bold'>Profile here</h1>
        </div>
    </div>
  )
}
