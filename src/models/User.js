const { Schema, model } = require('mongoose');

const userSchema = new Schema( //declaramos el esquema primero
    {
        userName: {
            type: String,
            required: true,
            trim: true, // esta opcion limpia los espacios mal puestos en este dato
            unique: true

        }
    },
    {timestamps: true} //le decimos a mongoose q agrege y guarde la fecha de creacion y de modificacion
)

module.exports = model('User', userSchema) //aqui creamos el modelo  