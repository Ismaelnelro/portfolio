/*
Fetch a la web de https://pokeapi.co/
-----------------------------------------
Endpoint: https://pokeapi.co/api/v2
+ /pokemon/ditto
+ /pokemon?limit=100000&offset=0 
+ /others!

more info: https://pokeapi.co/docs/v2
*/

import axios from "axios";
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})
