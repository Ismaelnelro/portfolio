import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { Button } from '../../customComponents/button/Button';
import { Interest } from './Interest';
import { PersonalInfo } from './PersonalInfo';
import './styles.css';

export const AboutMe = () => {
   const { user } = useContext(UserContext)
   const { description } = user;



   return (
      <section id="aboutme" className="aboutme">
         <div className="contenido-seccion">
            <h2>About Me</h2>
            <p><span>Hello, I'm Ismael </span>
               {description}
            </p>

            <div className="container_info">
               <div className="info">
                  <PersonalInfo user={user} />
                  <Interest user={user} />
               </div>
            </div>
            <Button info={{ text: "Download CV", icon: "fa-solid fa-download" }} />
         </div>
      </section >
   )
}