import { pokemonApi } from '../apis';

export const getPokemonByName = async (name) => {
    try {
        const { data } = await pokemonApi.get(`pokemon/${name}`)
        return data;
    } catch (error) {
        console.log('El recurso solicitado no se encuentra disponible')
        return null;
    }
}