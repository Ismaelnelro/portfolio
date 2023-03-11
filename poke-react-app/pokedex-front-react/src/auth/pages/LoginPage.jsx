import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { useAuthStore } from '../../hooks/useAuthStore';
import './style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {

    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm({
        email: "",
        password: ""
    })

    const { startLogin, errorMessage } = useAuthStore()

    const onLogingSubmite = (e) => {
        e.preventDefault();
        startLogin({ email: email, password: password })
        // dispatch(startLoginUserWithEmailAndPassword({ email, password }));
    }

    useEffect(() => {
        if (errorMessage !== null) {
            toast(errorMessage)
        }

    }, [errorMessage])

    return (
        <div className='container'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <img src="./../../../src/assets/logo1.png" alt="" />
            <form action="" onSubmit={onLogingSubmite}>
                <input type="text" name="email" placeholder='correo@gmail.com' value={email} onChange={onInputChange} />
                <input type="text" name="password" placeholder='password' value={password} onChange={onInputChange} />
                <button type='submite' className='btn'>Login</button>
            </form>
            <NavLink to='/auth/register'>Create new account</NavLink>
            <div className='box_1'>
            </div>

        </div >
    )
}
