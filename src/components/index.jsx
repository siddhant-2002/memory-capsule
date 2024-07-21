import React from 'react'
import Navbar from './Navbar'
import Feed from './Feed'
import Profile from './Profile'

export const Main = () => {
  return (
    <div className='h-[100vh] w-[100vw] grid lg:grid-cols-8 bg-white gap-y-6 gap-x-6 p-12 grid-col'>
        <div className='lg:col-span-8 bg-gray-200 rounded-2xl flex place-content-center'>
            <Navbar />
        </div>
        <div className='lg:col-span-6 lg:h-full bg-gray-200 row-span-8 rounded-2xl flex place-content-center'>
            <Feed />
        </div>
        <div className='lg:col-span-2 lg:h-full bg-gray-200 row-span-8 rounded-2xl flex place-content-center'>
            <Profile/>
        </div>
    </div>
  )
}
