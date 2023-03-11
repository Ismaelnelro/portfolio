import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import './styles.css';

export const Porfolio = () => {
    const { user } = useContext(UserContext)
    const { proyects } = user;
    return (
        <section id="portfolio" className="portfolio">
            <div className="contenido-seccion">
                <h2>Porfolio</h2>
                <div className="galeria">
                    {proyects.map((proyect) => {
                        return (
                            <div class="proyecto" key={proyect.name}>
                                <img src={proyect.urlImg} alt={proyect.name} />
                                <div class="overlay">
                                    <h3>{proyect.name}</h3>
                                    <p>{proyect.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}