import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
// Roles
const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} no es un rol válido'
  }
  
const client= new Schema({
    usuario:{type:String,required:[true,'Usuario necesaio']},
    nombre:{type:String, required:[true,'Nombre Requerido']},
    password:{type:String,required:[true, 'Password necesaria']},
    address : {
        street : {type:String,required:[true, 'Direccion necesaria']},
        city : {type:String,required:[true, 'Ciudad necesaria']},
        region : {type:String,required:[true, 'Region necesaria']},
        postalCode : {type:String,required:[true, 'postalCode necesario']},
        country : {type:String,required:[true, 'Pais necesario']},
        phone : {type:String,default:''}
    },
    ordenenPrevia:[
        {
            categoriavisitada:{type:String, default:''}
        }
    ]
});

// Validator
client.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });


//Convertir a un modelo
const Cliente=mongoose.model('Cliente',client);

export default Cliente;