import { useDispatch, useSelector } from "react-redux"
import dbmongoApi from "../apis/MongoDB/apiMongoDB";
import { setFavoritePokemon } from "../store/slices/pokemonSlice";



export const usePokemonStore = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authMongoo)
    const { favorites } = useSelector((state) => state.pokemons)


    const startSavingFavorite = async (pokemon) => {
        console.log(pokemon);
        const { id, name, height, weight, types, stats ,sprites } = pokemon;
        const typeDB = types.map((type) => {
            return type.type.name
        })

        const statsDB = stats.map((stat) => {
            return {
                name: stat.stat.name,
                stat: stat.base_stat
            }
        })

        const pokemonModel = {
            id,
            name,
            height,
            weight,
            types: typeDB,
            stats: statsDB,
            sprites: sprites.front_default
        }
        const { data } = dbmongoApi.post('/events', pokemonModel)
    }


    const getFavoritePokemons = async () => {
        const { data } = await dbmongoApi.get('/events')
        dispatch(setFavoritePokemon(data?.schemaDB[0]?.favoritePokemons))
        console.log("usePokemonStore",favorites);
    }



    return {
        //*Porperties
        user,
        favorites,

        //*Metodos
        startSavingFavorite,
        getFavoritePokemons
    }
}
