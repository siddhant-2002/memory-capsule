import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [action, setAction] = useState('');

    const registerLink = (e) => {
        e.preventDefault();
        setAction(' active');
    };

    const loginLink = (e) => {
        e.preventDefault();
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
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>

                    <button type="submit">Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <Link to='#' onClick={registerLink}>Register</Link> </p>
                    </div>

                </form>
            </div>

            <div className='form-box register'>
                <form action="">
                    <h1>Sign Up</h1>

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

                    <button type="submit">Sign Up</button>

                    <div className='register-link'>
                        <p>Already have an account? <Link to='#' onClick={loginLink}>Log In</Link> </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;