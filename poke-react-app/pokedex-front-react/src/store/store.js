/*
    Seccion de Store, aqui incorpora los reducer 
    que permitiran cambiar el estado de la aplicacion
*/

import { configureStore } from '@reduxjs/toolkit'
import { PokemonSlice } from './slices/pokemonSlice';
import { mongoAuthSlice } from './MongooAuth/mongoAuthSlice';
import { firebaseAuthSlice } from './firebaseAuth/firebaseAuthSlice';

export const store = configureStore({
    reducer: {
        pokemons: PokemonSlice.reducer,
        authMongoo: mongoAuthSlice.reducer,
        authFirebase: firebaseAuthSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 228 },
        serializableCheck: { warnAfter: 288 },
    })
})