import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { Button } from '../../customComponents/button/Button';
import './styles.css';

export const Contact = () => {
   const { user } = useContext(UserContext)
   const { personalInfo } = user;
   return (
      <>
         <section id="contact" className="contacto">
            <div className="contenido-seccion">
               <h2>CONTACT</h2>
               <div className="container_info">
                  <div className="info">
                     <input type="text" placeholder="Name" />
                     <input type="text" placeholder="Email" />
                     <input type="text" placeholder="Subject" />
                     <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                  </div>
                  <div className="info">
                     <img src="/src/assets/location.webp" alt="" />
                     <div className="info">
                        <ul>
                           <li>
                              <i className="fa-solid fa-location-dot"></i>
                              {personalInfo[3].address}
                           </li>
                           <li>
                              <i className="fa-solid fa-mobile-screen"></i>
                              {personalInfo[1].cel}
                           </li>
                           <li>
                              <i className="fa-solid fa-envelope"></i>
                              {personalInfo[2].email}
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <Button info={{ text: "Enviar", icon: "fa-solid fa-paper-plane" }} />
            </div>
         </section>
      </>
   )
}