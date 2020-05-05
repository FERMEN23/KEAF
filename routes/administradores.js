import express from 'express';
const router = express.Router();

//Importar el modelo categoria

import Admins from '../models/administradores'

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Filtrar campos de PUT
const _ = require('underscore');

//Agregar una nota
router.post('/nuevo-administrador', async (req, res) => {

  const body = {
    userID: req.body.userID,
    Login: req.body.Login,
    Name: req.body.Name,
    email: req.body.email,
    Password:''
  
  }
  body.Password = bcrypt.hashSync(req.body.Password, saltRounds);
  try {

  const adminDB = await Admins.create(body);
   
    return res.json(adminDB);
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});

// GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
     let body = _.pick(req.body, ['userID', 'Login', 'Password', 'Name','email']);
     if(body.Password){
       body.Password = bcrypt.hashSync(req.body.Password, saltRounds);
     }


     try {
        const adminDB = await Admins.findByIdAndUpdate(_id,body,{new: true, runValidators: true});
        res.json(adminDB);

     } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
     }

});

module.exports = router;


/*
var express = require('express');
var router = express.Router();

import Admins from '../models/administradores';

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ =require('underscore');

router.post('/nuevo-administrador', async (req, res) => {

    const body = {
      userID: req.body.userID,
      Login: req.body.Login,
      Name: req.body.Name,
      email: req.body.email,
      Password:''
    
    }
    body.Password = bcrypt.hashSync(req.body.Password, saltRounds);
    try {
  
    const adminDB = await Admins.create(body);
  
      return res.json(adminDB);
      
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      });
    }
  
  });
  
  // GET users listing. 
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  
  
  
     router.put('/admin/:id', async(req, res) => {
  
      let id = req.params.id;
      let body = _.pick(req.body, ['userID', 'Login','Password', 'Name', 'email']);
      if(body.Password){
        body.pass = bcrypt.hashSync(req.body.Password, saltRounds);
      }
    
      try {
        // {new:true} nos devuelve el usuario actualizado
        const adminDB = await Admins.findByIdAndUpdate(id, body, {new: true, runValidators: true});
    
        return res.json(adminDB);
    
      } catch (error) {
        return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
        })
      }
    
    });
  
    router.delete('/Administradores/:id', async(req, res) => {
  
      let id = req.params.id;
    
      try {
    
        const administradorDelete = await Admins.findByIdAndRemove(id);
    
        if(!administradorDelete){
          return res.status(400).json({
            mensaje: 'Usuario no encontrado'
          })
        }
    
        return res.json(administradorDelete);
        
      } catch (error) {
        return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
        })
      }
    
    });
  
  module.exports = router;*/