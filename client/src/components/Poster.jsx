import React from 'react';
import posterImage from '../assets/poster.png'; // Adjust the path as necessary

const Poster = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div className="flex justify-center ">
                <img src={posterImage} alt="Poster" className='w-3/4 h-auto' />
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className="text-center text-wrap text-3xl gap-5 font-bold p-3 nunito-sans">
                    Memories are a <br /> way of holding <br /> on, to the things <br /> you love...!
                </span>
            </div>

            <div className="flex justify-center items-end space-x-4 p-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Signup
                </button>
            </div>
        </div>
    );
}

export default Poster;