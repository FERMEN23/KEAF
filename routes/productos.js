import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Products from '../models/productos'

//Agregar una nota
router.post('/nuevo-producto',async(req,res)=>{
    const body=req.body;
    try {
        const productoDB= await Products.create(body);
        res.status(200).json(productoDB);
    } catch (error) {

        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        });
    }


});

//Get con parametros
router.get('/producto/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const categoriaDB = await Products.findOne({_id});
        res.json(categoriaDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

//Get con todos los documentos
router.get('/productos',async(req,res)=>{
    try {
        const productosDB = await Products.find();
        res.json(productosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});


//Ruta delete
router.delete('/productos/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        
        const productoDB = await Products.findByIdAndDelete({_id});
        if(!productoDB){
            return res.status(400).json({
                mensaje:'No se encontró el id indicado',
                error
            })    
        }
        res.json(productoDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});
//put
router.put('/producto/:id',async(req,res)=>{
    const _id=req.params.id;
    const body=req.body;
    try {
        const productoDB = await Products.findByIdAndUpdate(_id,body,{new: true});
        console.log(productoDB)
        res.json(productoDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

module.exports = router;