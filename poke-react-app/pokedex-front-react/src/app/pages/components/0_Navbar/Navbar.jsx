import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { AiOutlineShop } from 'react-icons/ai';
import { RiAccountPinCircleLine, RiStarSLine } from "react-icons/ri";
import { CiSettings } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import '../../styles.css'

export const Navbar = () => {

    const [navbarState, setnavbarState] = useState(false);

    const showNavbar = (e) => {
        e.preventDefault();
        setnavbarState(!navbarState)
    }



    return (
        <div className={navbarState ? "navbar-active" : "navbar"} >
            <ul>
                <li><a className={navbarState ? "arrow-active" : "arrow"} href="" onClick={(e) => showNavbar(e)}>< FiArrowRight /></a></li>
                <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'active' : ''}`} to='/'>
                        <HiOutlineSquares2X2 />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'active' : ''}`} to='/shop'>
                        <AiOutlineShop />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'active' : ''}`} to='/favorite'>
                        <RiStarSLine />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'active' : ''}`} to='/settings'>
                        <CiSettings />
                    </NavLink>
                </li>
            </ul>
            <div className='account'>
                <NavLink className={({ isActive }) => `${isActive ? 'active' : ''}`} to='/account'>
                    <RiAccountPinCircleLine />
                </NavLink>
            </div>
        </div>
    )
}