import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Productos= new Schema({
        productID :{type:String,required:[true,'Id de producto necesario']} ,
		supplierID : {type:String,required:[true,'Id de supplier necesario']},
		categoryID : {type:String,required:[true,'Id de categoria necesario']},
		quantityPerUnit :{type:String,required:[true,'Cantidad necesario']},
		unitPrice :{type:Number,required:[true,'Precio de producto necesario']},
		unitsInStock:{type:Number,required:[true,'Unidades disponibles producto necesario']},
		unitsOnOrder :{type:Number,default:0},
		reorderLevel : {type:Number,defaul:0},
		discontinued :{type:Boolean,default:false},
		name :{type:String,required:[true,'Nombre de producto necesario']}
});

//Convertir a un modelo
const Products=mongoose.model('Products',Productos);

export default Products;