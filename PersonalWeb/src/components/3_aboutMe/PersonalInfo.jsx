import React from 'react'
import './styles.css';

export const PersonalInfo = ({ user }) => {

    const { personalInfo, items } = user;


    return (
        <div className="contenedor-infopersonal">
            <h3>Personal Info</h3>
            <ul>
                {personalInfo.map((info, index) => {
                    return (
                        <li key={info[Object.keys(info)]}>
                            <strong>{items[index] + " :"}</strong>

                            {info[items[index]]}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}