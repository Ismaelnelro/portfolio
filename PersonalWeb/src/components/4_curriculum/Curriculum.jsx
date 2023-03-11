import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import './styles.css';

export const Curriculum = () => {
    const { user } = useContext(UserContext)
    const { cv, experience } = user

    return (
        <>
            <section id="cv" className="curriculum">
                <div className="contenido-seccion">
                    <h2>Curriculum</h2>
                    <div className="container_info">
                        <div className="info izquierda">
                            <h3>Education</h3>
                            {cv.map((education, index) => {
                                return (
                                    <div className="item izq" key={index}>
                                        <h4>{education.institution}</h4>
                                        <span className="casa">{education.degree}</span>
                                        <span className="fecha">{education.dateOfGraduation}</span>
                                        {(education.frontendDetail != "---") ? <p>FrontEnd:  {education.frontendDetail} </p> : " "}
                                        {(education.backendDetail != "---") ? <p>BackEnd:  {education.backendDetail} </p> : " "}
                                        {(education.certification != "") ?
                                            <div className='linkCertification'>
                                                <a href={education.certification} target="_blank"><p>Link</p></a>
                                            </div>
                                            : ""}
                                        <div className="conectori">
                                            <div className="circuloi"></div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                        <div className="info derecha">
                            <h3>Work experience</h3>
                            {
                                experience.map((work, index) => {
                                    return (
                                        <div className="item der" key={index}>
                                            <h4>{work.institution}</h4>
                                            <span className="casa">{work.title}</span>
                                            <span className="fecha">{work.year}</span>
                                            <p>{work.description}</p>
                                            <hr />
                                            <p>{work.ability}</p>
                                            <div className="conectord">
                                                <div className="circulod"></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}