/*
    getPokemons:
    1_Es llamada en un componente mediante un dispatch. Esta funcion debe recibir como argumento el numero de paginas
    2_Se hace un dispatch  al reducer del store, previamente se hace un llamado al API Pokemon para obtener los datos necesarios para mutar el estado en el Store
*/

import { addFavoritePokemon, pokemonOfDay, setPokemons, setRandomsPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from '../../apis/Pokemons/apis';


/*GET-POKEMONS-PAGE*/
export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))

    }
}

/*GET-POKEMONS-RANDOM*/
export const getRandomsPokemons = (randomNumber) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());
        const { data } = await pokemonApi.get(`/pokemon?limit=20&offset=${randomNumber * 10}`)

        let promises = data.results.map(res => {
            const names = res.name;
            return fetch(`https://pokeapi.co/api/v2/pokemon/${names.toLowerCase()}`)
                .then(datafiltrada => datafiltrada.json())
        });

        let newRandomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        Promise.all(promises)
            .then(arrPokemons => {
                dispatch(setRandomsPokemons({ pokemons: arrPokemons, randomNumber: newRandomNumber }))
            })
            .catch(error => console.log(error));
    }
}


/*SAVE-FAVORITE-POKEMON*/
export const addFavoritePokemons = (favoritePokemon) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await pokemonApi.get(`pokemon/${favoritePokemon}`)
            dispatch(addFavoritePokemon({ favorites: data }))
            
        } catch (error) {
            if (error.response.status === 404) {
                console.log('El recurso solicitado no se encuentra disponible')
            } else {
                console.log('Se produjo un error al procesar su solicitud')
            }
        }
    }
}


/*GET-POKEMON-NAME*/
export const getPokemon = (name = 'pikachu') => {
    return async (dispatch, getState) => {
        const { data } = await pokemonApi.get(`pokemon/${name}`)
        // console.log(data);
    }
}






/*GET-POKEMON-OF-DAY*/
export const getPokemonOfDay = (pokemonDay = 'pikachu') => {
    return async (dispatch, getState) => {
        
        const date = new Date()
        const month = date.getMonth()
        const day = date.getDate()
        const dayOfYear = (month * 30 )+ day

        const { data } = await pokemonApi.get(`pokemon/${dayOfYear}`)
        dispatch(pokemonOfDay({ pokemonDay: data }))
    }
}
