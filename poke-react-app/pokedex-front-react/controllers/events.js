const { response } = require('express');
const Event = require('../models/Event');



/*
Saving your favorite pokemons: 
En esta funcion se busca crear un schemaDB por primea vez,
luego ir actualizando los pokemones favoritos y impactando la actualizacion
en la base de datos pokemones favoritos
!NOTA: Buscar manera de mejorar esto y que la funcion cumpla un solo objetivo
*/



const saveFavorites = async (req, res = response) => {
    const schemaDB = await Event.find();
    try {

        // Crear evento por primera vez
        if (schemaDB.length == 0) {
            console.log("agergando primera vez pokemon a favorito");
            const event = new Event()
            event.favoritePokemons.push(req.body)
            event.user = req.uid;
            const eventDB = await event.save()

            res.status(201).json({
                ok: true,
                event
            })
        }

        // actualizar evento
        if (schemaDB[0]?.favoritePokemons.length > 0) {
            console.log("agergando nuevo pokemon a favorito");

            schemaDB.map((properties) => {
                properties.favoritePokemons.push(req.body)
            })
            
            const schema = schemaDB[0];
            res.status(200).json({
                ok: true,
                schema

            })

            const eventoUpdate = await Event.findByIdAndUpdate(schemaDB[0].id, schemaDB[0])
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con administrador'
        })
    }
}


/*getting your list of favorite pokemons*/
const getFavorites = async (req, res = response) => {
    try {
        const schemaDB = await Event.find();
        res.status(202).json({
            ok: true,
            schemaDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con administrador'
        })
    }
}


/*Saving your favorite pokemons*/
const removeFavorites = async (req, res = response) => {

    try {

        const nombre = req.query.name
        const schemaDB = await Event.find();

        // !NOTA: deberia manera el error en caso de quie el nombre no este?
        schemaDB.map((properties) => {
            properties.favoritePokemons = properties.favoritePokemons.filter((pokemon) => {
                return pokemon.titulo != nombre
            })
        })

        await Event.findByIdAndUpdate(schemaDB[0].id, schemaDB[0])


        res.status(200).json({
            ok: true,
            msg: "eliminado exitosamente",
            schemaDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "hablar con el administrador"
        })
    }
}


module.exports = {
    getFavorites,
    saveFavorites,
    removeFavorites
}