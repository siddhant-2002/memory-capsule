import React from 'react'
import Navbar from './Navbar'
import Feed from './Feed'
import Profile from './Profile'


export const Main = () => {
  return (
    // <div className='h-[100vh] w-[100vw] grid lg:grid-cols-8 bg-white gap-y-6 gap-x-6 p- grid-col'>

    //     <div className='lg:col-span-8 bg-gray-200 row-span-2 rounded-2xl flex place-content-center'>
    //         <Navbar />
    //     </div>
    //     <div className='lg:col-span-6 lg:h-full bg-gray-200 row-span-8 rounded-2xl flex place-content-center overflow-y-hidden border-2'>

    //         <Feed />
    //     </div>
    //     <div className='lg:col-span-2 lg:h-full bg-gray-200 row-span-8 rounded-2xl flex place-content-center'>
    //         <Profile/>
    //     </div>

    // </div>

    <div className='h-[100vh] w-[100vw]  flex flex-col bg-white gap-y-6 p-10 gap-x-6 overflow-y-hidden  '>

      <div className=' bg-gray-200 h-[50vh] rounded-2xl flex place-content-center'>
        <Navbar />
      </div>
      <div className='flex  gap-6'>
        <div className='  bg-gray-200 w-[100vw] h-[80vh] rounded-2xl flex place-content-center border-2 '>
          <Feed />
        </div>
        <div className=' bg-gray-200  rounded-2xl flex place-content-center'>
          <Profile />
        </div>
      </div>


    </div>
  )
}
