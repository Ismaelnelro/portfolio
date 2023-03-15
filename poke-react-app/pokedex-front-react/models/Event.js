const { Schema, model } = require('mongoose');


const EventSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    favoritePokemons: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                id: { type: Number },
                name: { type: 'string' },
                height: { type: Number },
                weight: { type: Number },
                types1: {type:'string'},
                types2: {type:'string'},
                stats: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            stat: { type: Number}
                        }
                    }
                },
                sprites: { type: 'string' },
                abilities: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
               
            }
        }
    },
    pokemonsBughted: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                titulo: { type: 'string' },
                descripcion: { type: 'string' }
            }
        }
    },
    pokemonsSold: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                titulo: { type: 'string' },
                descripcion: { type: 'string' }
            }
        }
    }
}
)

// Buscamos eliminar el __V y el _id cambiarlo por id
EventSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id
    return object
})

module.exports = model('Event', EventSchema);
