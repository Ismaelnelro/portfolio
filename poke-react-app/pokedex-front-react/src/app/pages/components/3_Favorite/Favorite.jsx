import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { usePokemonStore } from '../../../../hooks/usePokemonStore';
import './styles.css'

export const Favorite = () => {
    const [pokemonToShow, setpokemonToShow] = useState()
    const { favorites, getFavoritePokemons } = usePokemonStore();

    if (pokemonToShow) {
        var { sprites, name, stats, height, weight, id, types
        } = pokemonToShow
    }

    useEffect(() => {
        getFavoritePokemons();
    }, [])

    useEffect(() => {
        (favorites.length > 0)
        return showDetails(favorites[0]?.name)
    }, [])


    const showDetails = (name) => {
        let pokemon = favorites.find((favorite) => {
            return favorite?.name === name
        })
        setpokemonToShow(pokemon)
        console.log(pokemon);
    }

    return (
        <section className='seccion'>
            {/* SHOW FAVORITES */}
            <h1 className='favorite-title'>FAVORITES</h1>
            <div className='favorite-container'>
                {
                    favorites?.map((favorite) => (
                        <div
                            key={favorite?.id}
                            className={`favorite-pokemon ${(favorite) ?
                                `${favorite?.types[0]}-fa`
                                :
                                'default-fa'}`}
                        >
                            <p>{favorite?.name}</p>
                            <img src={favorite?.sprites} alt=""
                                id={favorite?.name}
                                onClick={(e) => showDetails(e.target.id)}
                            />
                            <p>
                                {favorite?.types[0]}
                                &nbsp;
                                {favorite?.types[1]}
                            </p>
                        </div>
                    )
                    )}
            </div>

            {/* SHOW STATS OF EACH FAVORITE POKEMON */}
            <h4 className='favorite-title'>STATS OF {name}</h4>
            <div className='show-info-pokemon'>
                <div className='info-card'>
                    <div className='info-card-img'>
                        <img src={sprites} alt="" />
                    </div>
                    <div className="info-card-body">
                        <p>{height / 10.0}&nbsp;m</p>
                        <p>{weight / 10.0}&nbsp;weight</p>
                        <p>#{id}</p>
                        <div className='info-card-details'>
                            <div className='stats'>
                                {stats?.map((stat) => (
                                    <p>{stat?.name} : {stat?.stat}</p>
                                ))}
                            </div>

                            <div className='abilities'>
                                {/* {abilities?.map((abitilie) => (
                                    <p>{abitilie?.ability?.name}</p>
                                ))} */}
                            </div>
                        </div>
                        <button className='info-card-btn'>Add to Buy</button>
                    </div>
                </div>
            </div>
        </section>
    )
}