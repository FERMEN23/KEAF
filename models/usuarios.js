import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Usuario= new Schema({
    customerID:{type:String,required:[true,'Id de cliente necesaio']},
    companyName:{type:String,default:''},
    contactName:{type:String,required:[true, 'Nombre necesario']},
    contactTitle:{type:String,required:[true, 'Titlle necesario']},
    address : {
        street : {type:String,required:[true, 'Direccion necesaria']},
        city : {type:String,required:[true, 'Ciudad necesaria']},
        region : {type:String,required:[true, 'Region necesaria']},
        postalCode : {type:String,required:[true, 'postalCode necesario']},
        country : {type:String,required:[true, 'Pais necesario']},
        phone : {type:String,default:''}
    }
});

//Convertir a un modelo
const Users=mongoose.model('Users',Usuario);

export default Users;