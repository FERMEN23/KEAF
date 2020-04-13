import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Admins from '../models/administradores'

//Agregar una nota
router.post('/nuevo-administrador', async(req,res)=>{
    const body=req.body;
    try {
        const adminDB= await Admins.create(body);
        res.status(200).json(adminDB);
    } catch (error) {

        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        });
    }


});

//Get con parametros
router.get('/admin/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const adminDB = await Admins.findOne({_id});
        res.json(adminDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

//Get con todos los documentos
router.get('/admins',async(req,res)=>{
    try {
        const adminsDB = await Admins.find();
        res.json(adminsDB);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//Ruta delete
router.delete('/admin/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        
        const adminDB = await Admins.findByIdAndDelete({_id});
        if(!adminDB){
            return res.status(400).json({
                mensaje:'No se encontró el id indicado',
                error
            })    
        }
        res.json(adminDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});
//put
router.put('/admin/:id',async(req,res)=>{
     const _id=req.params.id;
     const bodyc=req.body;
     try {
        
        const adminDB = await Admins.findByIdAndUpdate(_id,bodyc,{new: true});
        res.json(adminDB);

     } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
     }

});

module.exports = router;