import React from 'react'
import { ShowPokemons } from './components/ShowPokemons';
import { PokemonOfTheDay } from './components/PokemonOfTheDay';
import './../styles.css'

export const Home = () => {


    return (
        <section className='seccion'>
            {/* SLICE DE POKEMONS RANDOMS */}
            <ShowPokemons />

            {/* INFO DE POKEMONDAY */}
            <PokemonOfTheDay />
        </section >
    )
}