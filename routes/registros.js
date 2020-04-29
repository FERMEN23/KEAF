import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Cliente from '../models/registros'

//Agregar una nota
router.post('/nuevo-cliente',async(req,res)=>{
    const body=req.body;
    try {
        const usuarioDB= await Cliente.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {

        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        });
    }


});

//Get con parametros
router.get('/cliente/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const usuarioDB = await Cliente.findOne({_id});
        res.json(usuarioDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

//Get con todos los documentos
router.get('/clientes',async(req,res)=>{
    try {
        const usuariosDB = await Cliente.find();
        res.json(usuariosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//Ruta delete
router.delete('/cliente/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        
        const usuarioDB = await Cliente.findByIdAndDelete({_id});
        if(!usuarioDB){
            return res.status(400).json({
                mensaje:'No se encontró el id indicado',
                error
            })    
        }
        res.json(usuarioDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});
//put
router.put('/cliente/:id',async(req,res)=>{
     const _id=req.params.id;
     const bodyc=req.body;
     try {
        
        const usuarioDB = await Cliente.findByIdAndUpdate(_id,bodyc,{new: true});
        res.json(usuarioDB);

     } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
     }

});

module.exports = router;