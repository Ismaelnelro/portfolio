import { createSlice } from '@reduxjs/toolkit';

export const PokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        pokemonofDay: null,
        isLoading: false,
        randomNumber: 2,
        favorites: [],
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = true;
            state.pokemons = action.payload.pokemons;
        },
        setRandomsPokemons: (state, action) => {
            state.pokemons = action.payload.pokemons;
            state.randomNumber = action.payload.randomNumber;
            state.isLoading = false;
        },
        addFavoritePokemon: (state, action) => {
            state.favorites.push(action.payload.favorites);
        },
        setFavoritePokemon: (state, action) => {
            state.favorites = action.payload;
        },
        pokemonOfDay: (state, action) => {
            state.pokemonofDay = action.payload.pokemonDay;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, setRandomsPokemons, addFavoritePokemon, setFavoritePokemon, pokemonOfDay } = PokemonSlice.actions;