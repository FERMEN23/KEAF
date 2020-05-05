import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

// Roles
const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido'
}

const Administradores= new Schema({
    userID:{type:String,required:[true,'Id de categoria necesaio']},
    Login:{type:String,default:''},
    Password:{type:String,required:[true, 'Nombre necesario']},
    Name:{type:String,required:[true, 'Nombre necesario']},
    email:{type:String,required:[true, 'Nombre necesario']}
});



// Validator
Administradores.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

//Convertir a un modelo
const Admins=mongoose.model('Admins',Administradores);

export default Admins;

/*
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Administradores= new Schema({
    userID:{type:String,required:[true,'Id de categoria necesaio']},
    Login:{type:String,default:''},
    Password:{type:String,required:[true, 'Nombre necesario']},
    Name:{type:String,required:[true, 'Nombre necesario']},
    email:{type:String,required:[true, 'Nombre necesario']}
});

//Convertir a un modelo
const Admins=mongoose.model('Admins',Administradores);

export default Admins;*/