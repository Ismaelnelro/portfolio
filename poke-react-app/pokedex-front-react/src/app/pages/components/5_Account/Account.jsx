import React from 'react'
import { useAuthStore } from '../../../../hooks/useAuthStore';

export const Account = () => {
    const { startLogout, user } = useAuthStore();

    return (
        <section className='seccion'>
            <h1>Account {user.name}</h1>
            <button onClick={startLogout}>SALIR</button>
        </section >
    )
}