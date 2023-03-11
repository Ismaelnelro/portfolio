import React from 'react'
import './styles.css'

export const Button = ({ info }) => {
    const { text, icon } = info;

    console.log(icon)
    return (
        <button id='btn'>
            {text}
            &nbsp;
            <i className={icon}></i>
            <span className="overlay"></span>
        </button>
    )
}
