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

export default Admins;