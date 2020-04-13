import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Category from '../models/categorias'

//Agregar una nota
router.post('/nueva-categoria',async(req,res)=>{
    const body=req.body;
    try {
        const categoriaDB= await Category.create(body);
        res.status(200).json(categoriaDB);
    } catch (error) {

        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        });
    }


});

//Get con parametros
router.get('/categoria/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const categoriaDB = await Category.findOne({_id});
        res.json(categoriaDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

//Get con todos los documentos
router.get('/categorias',async(req,res)=>{
    try {
        const categoriasDB = await Category.find();
        res.json(categoriasDB);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//Ruta delete
router.delete('/categoria/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        
        const categoriaDB = await Category.findByIdAndDelete({_id});
        if(!categoriaDB){
            return res.status(400).json({
                mensaje:'No se encontró el id indicado',
                error
            })    
        }
        res.json(categoriaDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});
//put
router.put('/categoria/:id',async(req,res)=>{
     const _id=req.params.id;
     const bodyc=req.body;
     try {
        
        const categoriaDB = await Category.findByIdAndUpdate(_id,bodyc,{new: true});
        res.json(categoriaDB);

     } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
     }

});

module.exports = router;