import React from 'react'

export const Burgerbtn = ({ handleNav }) => {
    return (
        <div className='burger-menu' onClick={handleNav}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
    )
}