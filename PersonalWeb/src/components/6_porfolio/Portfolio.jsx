import React, { useContext, useRef, useState } from 'react'
import './styles.css';
import { UserContext } from '../../context/UserContext';

export const Portfolio = () => {

    const { user } = useContext(UserContext)
    const { proyects } = user;

    const [checked, setchecked] = useState(false)

    const item_1 = useRef();
    const item_2 = useRef();
    const item_3 = useRef();
    const item_4 = useRef();


    const onChangeInpuntState = (e) => {
        const proyecto = e.target.closest(".proyecto").className.slice(9, 16);

        switch (proyecto) {
            case 'item_1': item_1.current.checked = !checked;
                break;
            case 'item_2': item_2.current.checked = !checked;
                break;
            case 'item_3': item_3.current.checked = !checked;
                break;
            case 'item_4': item_4.current.checked = !checked;
                break;
        }
    }

    return (
        <section id="portfolio" className="portfolio">
            <div className="contenido-seccion">
                <h2>Porfolio</h2>
                <div className='contenido-slider'>
                    <div className="slider">

                        <input ref={item_1} type="radio" name="slider" id="item_1" defaultChecked={!checked} />
                        <input ref={item_2} type="radio" name="slider" id="item_2" defaultChecked={checked} />
                        <input ref={item_3} type="radio" name="slider" id="item_3" defaultChecked={checked} />
                        <input ref={item_4} type="radio" name="slider" id="item_4" defaultChecked={checked} />
                        <div className='proyectos'>
                            {proyects.map((proyect) => {
                                return (
                                    <div key={proyect.id} onClick={(e) => onChangeInpuntState(e)} className={"proyecto item_" + proyect.id} id={"proyecto-" + proyect.id}>
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
                </div>
            </div>
        </section>
    )
}