import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'


const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            pass: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='login-page-wrapper'>
            <div className="login-section bg-white p-4 p-lg-5">
                <h3>ShopLocal</h3>
                <p className='text-muted'>Log in to your account to continue.</p>
                <form onSubmit={formik.handleSubmit} className='mt-4 text-muted' action="">
                    <CustomInput
                        type="email"
                        name="email"
                        id="email"
                        label="Email Address"
                        val={formik.values.email}
                        onCh={formik.handleChange('email')}

                    />
                    <CustomInput
                        type="pass"
                        id="pass"
                        name="pass"
                        label="Password"
                        val={formik.values.pass}
                        onCh={formik.handleChange('pass')}
                    />
                    <Link to="/admin"><button type="submit" className="loginBtn btn">Login</button></Link>
                    <Link to="/forgot-password" className='forgotPass'><p>Forgot Password?</p></Link>
                </form>
            </div>
        </div>
    )
}

export default Login