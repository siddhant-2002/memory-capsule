import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div className="bg-red-500 w-full h-16"></div> {/* Horizontal div */}
  <div className="flex justify-between w-full mt-4">
    <div className="bg-blue-500 w-1/2 h-48"></div> {/* First vertical div */}
    <div className="bg-green-500 w-1/2 h-48"></div> {/* Second vertical div */}
  </div>
</div>
  )
}

export default Home