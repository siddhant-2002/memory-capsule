import React from 'react'
import { Routes } from 'react-router-dom'
// import Profiles from '../pages/Profiles'
import { Route } from 'react-router-dom'
import {Capsule} from './Feed/Capsule'
import { Login } from './Auth/Login'
import { Signup } from './Auth/Signup'
import { Settings } from './Feed/Settings'
import { Home } from './Feed/Home'


const Feed = (props) => {
    
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/capsule' element={<Capsule />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    )
}

export default Feed