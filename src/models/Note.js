const { Schema, model } = require('mongoose');


const noteSchema = new Schema( //declaramos el esquema primero
    {
        title: String,
        content: {
            type: String,
            required: true //declaramos este dato como requerido
        },
        author: String,
        date: {
            type: Date,
            default: Date.now // esta opcion es para establecer un dato por defecto
        }
    },
    {timestamps: true} //agrega fecha de creacion y modificacion
)

module.exports = model('Note', noteSchema) //aqui creamos el modelo  

//** al crea el Modelo 'Note' mongoose crea la coleccion 'notes' en Mongodb automaticamente */