import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
    return (
        <div className='login-page-wrapper'>
            <div className="login-section bg-white p-4 p-lg-5">
                <h3>ShopLocal</h3>
                <p className='text-muted'>Enter your email to reset password</p>
                <form className='mt-4 text-muted' action="">
                    <CustomInput type="email" id="email" label="Email Address" />
                    <button type="submit" className="loginBtn btn">Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword