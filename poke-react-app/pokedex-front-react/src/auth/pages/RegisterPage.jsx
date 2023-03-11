import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterPage = () => {

   const { startRegister, errorMessage } = useAuthStore();

   const { name, email, password, password2, onInputChange } = useForm({
      name: "",
      email: "",
      password: "",
      password2: ""
   })

   useEffect(() => {
      if (errorMessage !== null) {
         toast(errorMessage)
      }

   }, [errorMessage])

   const registerSubmite = (e) => {
      e.preventDefault();
      if (password !== password2) {
         toast('Error en el registro,contrasenas igual')
         return
      }
      startRegister({ name: name, email: email, password: password })
   }


   return (
      <>
         <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
         />

         <form onSubmit={registerSubmite} >
            <input type="text" value={name} placeholder='Name' name='name' onChange={onInputChange} />
            <input type="text" value={email} placeholder='Email' name='email' onChange={onInputChange} />
            <input type="text" value={password} placeholder='Password' name='password' onChange={onInputChange} />
            <input type="text" value={password2} placeholder='Repeat password' name='password2' onChange={onInputChange} />
            <button type='submite' className='btn'>Register</button>
         </form>
      </>
   )
}