import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Order from '../models/ordenes'

//Agregar una nota
router.post('/nueva-orden',async(req,res)=>{
    const body=req.body;
    try {
        const ordenDB= await Order.create(body);
        res.status(200).json(ordenDB);
    } catch (error) {

        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        });
    }

});
//Get con parametros
router.get('/orden/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const categoriaDB = await Order.findOne({_id});
        res.json(categoriaDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});


//Get con todos los documentos
router.get('/ordenes',async(req,res)=>{
    try {
        const ordenesDB = await Order.find();
        res.json(ordenesDB);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});


//Ruta delete
router.delete('/orden/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        
        const ordenDB = await Order.findByIdAndDelete({_id});
        if(!ordenDB){
            return res.status(400).json({
                mensaje:'No se encontró el id indicado',
                error
            })    
        }
        res.json(ordenDB);
        

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});
//put
router.put('/orden/:id',async(req,res)=>{
    const _id=req.params.id;
    const body=req.body;
    try {
        const ordenDB = await Order.findByIdAndUpdate(_id,body,{new: true});
        res.json(ordenDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

module.exports = router;