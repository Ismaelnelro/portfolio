import React from 'react'
import './styles.css';

const navbarLink = ["home", "Aboutme", "cv", "skills", "portfolio", "contact"];

export const Nav = () => {

  return (
    <div className='navbar'>
      <div className="brand">
        <img src="/src/assets/logo.png" alt="logo" />
      </div>

      <nav className="nav">
        <ul>
          {navbarLink.map(link => {
            return (
              <li key={link}>
                <a href={`#` + link.toLowerCase()}>
                  {link.toUpperCase()}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}