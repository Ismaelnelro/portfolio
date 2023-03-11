import React, { useEffect, useState } from 'react'
import './style.css';
import { Burgerbtn } from './Burgerbtn';

const navbarLink = ["home", "Aboutme", "skills", "portfolio", "contact"];

export const Navbar = () => {
  const [hiddenNav, sethiddenNav] = useState(true);

  useEffect(() => {
    if (screen.width < 767) window.location = "http://192.168.0.110:5173/#home"
  }, [])


  const handleNav = () => {
    sethiddenNav(!hiddenNav)
  }

  const handleNavOut = (e) => {
    console.log(e.target.innerHTML)
    if (e.target.innerHTML !== "HOME") {
      setTimeout(() => {
        sethiddenNav(!hiddenNav)
      }, 600);
    }
  }

  return (
    <div className={hiddenNav ? ' navbar_responsive navbar-hidden' : 'navbar_responsive'}>
      <Burgerbtn handleNav={handleNav} />
      <nav className="nav">
        <ul>
          {navbarLink.map(link => {
            return (
              <li key={link}>
                <a href={`#` + link.toLowerCase()} onClick={(e) => handleNavOut(e)} >
                  {link.toUpperCase()}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div >
  )
}