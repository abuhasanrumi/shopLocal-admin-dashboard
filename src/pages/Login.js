import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const schema = Yup.object().shape({
        email: Yup.string().email("Email should be valid").required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(login(values))
        },
    });

    const authState = useSelector((state) => state)

    const { user, isLoading, isError, isSuccess, message } = authState.auth

    useEffect(() => {
        if (isSuccess) {
            navigate('admin')
        } else {
            navigate("")
        }
    }, [user, isLoading, isError, isSuccess])

    return (
        <div className='login-page-wrapper'>
            <div className="login-section bg-white p-4 p-lg-5">
                <h3>ShopLocal</h3>
                <p className='text-muted'>Log in to your account to continue.</p>
                <div className="error text-center">
                    {message.message == "Rejected" ? "You are not an Admin" : ""}
                </div>
                <form onSubmit={formik.handleSubmit} className='mt-4 text-muted' action="">
                    <CustomInput
                        type="text"
                        name="email"
                        id="email"
                        label="Email Address"
                        val={formik.values.email}
                        onCh={formik.handleChange('email')}
                    />
                    <div className="error mt-1">
                        {
                            formik.touched.email && formik.errors.email
                        }
                    </div>
                    <CustomInput
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        val={formik.values.password}
                        onCh={formik.handleChange('password')}
                    />
                    <div className="error mt-1">
                        {
                            formik.touched.email && formik.errors.email
                        }
                    </div>
                    <button type="submit" className="loginBtn btn mt-2">Login</button>
                    <Link to="/forgot-password" className='forgotPass'><p>Forgot Password?</p></Link>
                </form>
            </div >
        </div >
    )
}

export default Login