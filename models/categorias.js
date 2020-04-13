import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Categoria= new Schema({
    categoryID:{type:String,required:[true,'Id de categoria necesaio']},
    description:{type:String,default:''},
    name:{type:String,required:[true, 'Nombre necesario']}
});

//Convertir a un modelo
const Category=mongoose.model('Category',Categoria);

export default Category;