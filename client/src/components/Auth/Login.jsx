import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };


    return (
        <div className={`wrapper${action}`}>

            <div className='form-box login'>
                <form action="">
                    <h1>Login</h1>

                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>
                    </div>

                    <div className='input-box'>
                        <input type="password" placeholder='Password' required/>
                        <FaLock className='icon'/>
                    </div>

                    <div className='remember-forgot'>
                        <label>
                            <input type="checkbox"/> Remember me
                        </label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button type="Submit">Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href='#' onClick={registerLink} >Register</a> </p>
                    </div>

                </form>
            </div>


            {/* SIngin */}

            <div className='form-box register'>
                <form action="">
                    <h1>SingIn</h1>

                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>                   
                    </div>

                    <div className='input-box'>
                        <input type="email" placeholder='Email' required/>
                        <SiGmail className='icon'/>
                    </div>

                    <div className='input-box'>
                        <input type="password" placeholder='Password' required/>
                        <FaLock className='icon'/>
                    </div>

                    <div className='remember-forgot'>
                        <label> <input type="checkbox"/> I agree to the terms & Conditions </label>
                    </div>

                    <button type="Submit">SignIn</button>

                    <div className='register-link'>
                        <p>Already have an account? <a href='#' onClick={loginLink} >LogIn</a> </p>
                    </div>

                </form>
            </div>

           
            
        </div>
    )
}

export default LoginRegister;
