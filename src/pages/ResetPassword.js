import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <div className='login-page-wrapper'>
            <div className="login-section bg-white p-4 p-lg-5">
                <h3>ShopLocal</h3>
                <p className='text-muted'>Enter your new passwords</p>
                <form className='mt-4 text-muted' action="">
                    <CustomInput type="password" id="newPass" label="New Password" />
                    <CustomInput type="password" id="confirmPass" label="Confirm Password" />
                    <button type="submit" className="loginBtn btn">Confirm Change</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword