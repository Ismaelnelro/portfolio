import React from 'react'
import './styles.css';

export const Interest = ({ user }) => {

    const { hobbies } = user;
    return (
        <div className=''>
            <h3>Interests</h3>
            <div className="contenedor-intereses">
                {hobbies.map((hobbie) => {
                    return (
                        <div className="interes" key={hobbie[Object.keys(hobbie)]}>
                            <i className={hobbie[Object.keys(hobbie)]}></i>
                            <span>{Object.keys(hobbie)}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}