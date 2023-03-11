import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Account, Favorite, Home, Navbar, Settings, Shop } from './components/barrel';

export const HomePage = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='seccion-routes'>
                <Routes>
                    <Route path='/*' element={<Navigate to="/" />} />
                    <Route path='/' element={
                        <Home />
                    } />
                    <Route path='/shop' element={
                        <Shop />
                    } />
                    <Route path='/favorite' element={
                        <Favorite />
                    } />
                    <Route path='/settings' element={
                        <Settings />
                    } />
                    <Route path='/account' element={
                        <Account />
                    } />
                </Routes>
            </div>
        </div>
    )
}