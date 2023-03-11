import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import './styles.css';
import 'animate.css'

export const Hero = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <section id='home' className="home">

        <img className='image' src={`/src/assets/` + user.urlProfile} alt="foto perfil" />

        <h1>{user.name}</h1>
        <h2>{user.profesion}</h2>
        <div className="network">
          <a href={user.network.linked} target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href={user.network.github} target="_blank"><i className="fa-brands fa-github"></i></a>
        </div>

      </section>
    </>
  )
}