import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonOfDay } from '../../../../../store/slices/tunks';



export const PokemonOfTheDay = () => {

    const dispatch = useDispatch();
    const { pokemonofDay } = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemonOfDay())
    }, []);


    return (
        <div className='info'>

            <div className='container-pokemonDay'>
                <div className='title'>
                    <h1>Pokemon of the day</h1>
                </div>

                <div className='pokemon'>

                    <div className='stats'>
                        <p>
                            {pokemonofDay?.stats[0]?.stat?.name}:
                            {pokemonofDay?.stats[0]?.base_stat}
                        </p>
                        <p>
                            {pokemonofDay?.stats[1]?.stat?.name}:
                            {pokemonofDay?.stats[1]?.base_stat}
                        </p>
                        <p>
                            {pokemonofDay?.stats[2]?.stat?.name}:
                            {pokemonofDay?.stats[2]?.base_stat}
                        </p>
                        <p>
                            {pokemonofDay?.stats[3]?.stat?.name}:
                            {pokemonofDay?.stats[3]?.base_stat}
                        </p>
                        <p>
                            {pokemonofDay?.stats[4]?.stat?.name}:
                            {pokemonofDay?.stats[4]?.base_stat}
                        </p>
                        <p>
                            {pokemonofDay?.stats[5]?.stat?.name}:
                            {pokemonofDay?.stats[5]?.base_stat}
                        </p>
                        <p>
                            <em>
                                TYPE :
                                {" " + pokemonofDay?.types[0]?.type?.name}
                            </em>
                        </p>
                    </div>

                    <div className='img'>
                        <img src={pokemonofDay?.sprites?.front_default} alt="" />
                        <p>{pokemonofDay?.name} #{pokemonofDay?.id}</p>
                    </div>

                </div>

                <div className={`box_1 ${(pokemonofDay) ? ` ${pokemonofDay?.types[0]?.type?.name}` : 'default'}`}>
                </div>

            </div>
        </div>
    )
}