import React, { useEffect, useMemo, useState } from 'react'
import { usePokemonStore } from '../../../../hooks/usePokemonStore';
import './styles.css'

export const Favorite = () => {
    const [pokemonToShow, setpokemonToShow] = useState()
    const [hideFavorite, setHideFavorite] = useState(false)

    const { favorites, getFavoritePokemons } = usePokemonStore();

    if (pokemonToShow) {
        var {
            sprites,
            name,
            stats,
            height,
            weight,
            id,
            type1,
            type2,
            abilities } = pokemonToShow
    }

    useEffect(() => {
        getFavoritePokemons();
    }, [])



    const showDetails = (name) => {
        let pokemon = favorites.find((favorite) => {
            return favorite?.name === name
        })
        setHideFavorite(!hideFavorite)
        setpokemonToShow(pokemon)
        console.log(pokemon);
    }

    const OnToggleHidden = (e) => {
        e.preventDefault()
        setHideFavorite(!hideFavorite)
    }

    return (
        <section className='seccion'>
            {/* SHOW FAVORITES */}
            <h1 className='favorite-title'>FAVORITES</h1>
            {favorites ?
                (<div className='favorite-container'>
                    <div className='favoritos'>
                        {favorites?.map((favorite) => (
                            <div
                                key={favorite?.id}
                                className={`favorite-pokemon ${(favorite) ?
                                    `${favorite?.type1}-fa`
                                    :
                                    'default-fa'}`}
                            >
                                <div className='left'>
                                    <div className='first-row'>
                                        <p>#{favorite?.id}</p>
                                        <h5>{favorite?.name}</h5>
                                    </div>

                                    <div className='second-row'>
                                        <h4>
                                            {favorite?.type1}
                                            &nbsp;
                                            &nbsp;
                                            {favorite?.type2}
                                        </h4>
                                    </div>
                                    <div className='last-row' >
                                        <a id={favorite?.name} onClick={(e) => showDetails(e.target.id)}>show more</a>
                                    </div>
                                </div>

                                <div className='right'>
                                    <img src={favorite?.sprites} alt="" />
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
                ) :(
                <div className='no-favorite'>
                    <p>No favorite pokemons added yet</p>
                </div>)}


            {/* SHOW STATS OF EACH FAVORITE POKEMON */}
            <div className={`${(hideFavorite) ? 'favorite-stats-container' : 'favorite-stats-container hidden'}`}>
                <div className={`info-card ${type1}-fa`}>

                    {/* Card */}
                    <div className={`info-card-header ${type1}-fa`}>
                        <div className={`favorite-pokemon ${type1}-fa`} >
                            <div className='left'>
                                <div className='first-row'>
                                    <h5>{name}</h5>
                                    <p>#{id}</p>
                                </div>

                                <div className='second-row'>
                                    <h4>
                                        {type1}

                                    </h4>
                                </div>
                            </div>

                            <div className='right'>
                                <img src={sprites} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* infoCard */}
                    <div className="info-card-body">
                        <a onClick={(e) => OnToggleHidden(e)}> Return </a>
                        <div className='info-card-details'>

                            <h4>Profile</h4>
                            <div className='profile'>
                                <h5>
                                    {weight}kg
                                </h5>
                                <p>
                                    Weight
                                </p>
                                <h5>
                                    {height}m
                                </h5>
                                <p>
                                    Height
                                </p>
                            </div>


                            <h4>Base Stats</h4>
                            <div className='stats'>
                                {stats?.map((stat) => (
                                    <p>{stat?.name} : {stat?.stat}</p>
                                ))}
                            </div>


                            <h4>Abilities</h4>
                            <div className='abilities'>
                                {abilities?.map((abitily) => (
                                    <p>{abitily}</p>
                                ))}
                            </div>


                            <h4>Evolution chain</h4>
                            <div className='evolution'>
                            </div>

                            <div className='btn'>
                                <button className='info-card-btn'>Add to Buy</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}