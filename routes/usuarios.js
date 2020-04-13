import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Users from '../models/usuarios'

//Agregar una nota
router.post('/nuevo-usuario',async(req,res)=>{
    const body=req.body;
    try {
        const usuarioDB= await Users.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {

        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        });
    }


});

//Get con parametros
router.get('/usuario/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const usuarioDB = await Users.findOne({_id});
        res.json(usuarioDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

//Get con todos los documentos
router.get('/usuarios',async(req,res)=>{
    try {
        const usuariosDB = await Users.find();
        res.json(usuariosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//Ruta delete
router.delete('/usuario/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        
        const usuarioDB = await Users.findByIdAndDelete({_id});
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
router.put('/usuario/:id',async(req,res)=>{
     const _id=req.params.id;
     const bodyc=req.body;
     try {
        
        const usuarioDB = await Users.findByIdAndUpdate(_id,bodyc,{new: true});
        res.json(usuarioDB);

     } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
     }

});

module.exports = router;