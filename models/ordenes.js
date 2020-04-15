import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Ordenes= new Schema({
    orderID : {type:Number,required:[true,'Id de Orden necesaria']},
	customerID : {type:String,required:[true,'Id del cliente necesaria']},
	employeeID : {type:String,required:[true,'Id del empleado necesaria']},
	orderDate : {type:Date,default: Date.now},
	requiredDate :{type:Date,default: Date.now},
	shippedDate : {type:Date,default: Date.now},
	shipVia :{type:Number,default: 1},
	freight :{type:Number,default:0},
    shipName : {type:String,default:''},
    shipAddress : {
        street : {type:String,required:[true,'Direccion de envio necesaria']},
        city :{type:String,required:[true,'Cuidad de envio necesaria']},
        region :{type:String,default:'NULL'},
        postalCode :{type:String,required:[true,'Codigo Postal necesario']},
        country : {type:String,required:[true,'Pais de envio necesario']}
    },
    details : [
        {
        productID:{type:String, required:[true, 'ID de producto necesario']},
        unitPrice:{type:Number,required:[true, 'Precio unitario requerido']},
        quantity:{type:Number,default:1},
        discount:{type:Number,default:0}
        }
    ]
 
});

//Convertir a un modelo
const Order=mongoose.model('Order',Ordenes);

export default Order;