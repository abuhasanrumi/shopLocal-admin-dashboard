import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-page-wrapper'>
            <div className="login-section bg-white p-4 p-lg-5">
                <h3>ShopLocal</h3>
                <p className='text-muted'>Log in to your account to continue.</p>
                <form className='mt-4 text-muted' action="">
                    <CustomInput type="email" id="email" label="Email Address" />
                    <CustomInput type="pass" id="pass" label="Password" />
                    <Link to="/admin"><button type="submit" className="loginBtn btn">Login</button></Link>
                    <Link to="/forgot-password" className='forgotPass'><p>Forgot Password?</p></Link>
                </form>
            </div>
        </div>
    )
}

export default Login