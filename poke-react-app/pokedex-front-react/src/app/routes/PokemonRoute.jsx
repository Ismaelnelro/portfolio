import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../../auth/barrel';
import { HomePage } from '../pages/HomePage';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { getEnvVariable } from '../../helpers/getEnvVariables';
import { useAuthStore } from '../../hooks/useAuthStore';

export const PokemonRoute = () => {

    const { status, checkAuthToken } = useAuthStore();

    
    useEffect(() => {
        checkAuthToken();
    }, []);


    // const status = useCheckAuth();
    if (status === 'checking') {
        return (
            <div>
                LOADING
            </div>
        )
    }

    return (
        <div>
            <Routes>
                {/* Rutas determinadas por el estado del usuario */}
                {
                    (status === 'authenticated') ?
                        <Route path='/*' element={<HomePage />} />
                        :
                        <Route path='/auth/*' element={<AuthRoutes />} />
                }


                {/* Ruta de protecion, en caso de que el usuario quiera ir a una direccion que invente */}
                <Route path='/*' element={<Navigate to='auth/login' />} />
            </Routes>
        </div>
    )
}