const express = require('express');
const router = express.Router();
import Admins from '../models/administradores';
import Cliente from '../models/registros'

const bcrypt = require('bcrypt');


router.get('/login', async(req, res) => {
  res.json({mensaje: 'Funciona!'})
})

router.post('/', async(req, res) => {

    let body = req.body;
  
    try {
      // Buscamos email en DB
      const usuarioDB = await Admins.findOne({Login: body.Login});
  
      // Evaluamos si existe el usuario en DB
      if(!usuarioDB){
        return res.status(400).json({
          mensaje: 'Usuario! o contraseña inválidos',
        });
      }
  
      // Evaluamos la contraseña correcta
      if( !bcrypt.compareSync(body.Password, usuarioDB.Password) ){
        return res.status(400).json({
          mensaje: 'Usuario o contraseña! inválidos',
        });
      }
  
      // Pasó las validaciones
      return res.json({
        usuarioDB,
        token: 'fkajsdkf'
      })
      
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      });
    }
  
  });
router.post('/us', async(req, res) => {
  //console.log('estoy en post')
    let body = req.body;
    //console.log('estoy en post 2')
    
    try {
      // Buscamos email en DB
      const usuarioDB = await Cliente.findOne({usuario: body.Login});
     // console.log('estoy en post 3',usuarioDB, body.usuario)
  
      // Evaluamos si existe el usuario en DB
      if(!usuarioDB){
        //console.log('!usuarioDB')
        return res.status(400).json({
          mensaje: 'Usuario! o contraseña inválidos',
        });
      }
  
      //console.log('estoy en post 4')
  
      // Evaluamos la contraseña correcta
      if( !bcrypt.compareSync(body.password, usuarioDB.password) ){
        console.log('!bcrypt usuarioDB')
        return res.status(400).json({
          mensaje: 'Usuario o contraseña! inválidos',
        });
      }
      console.log('estoy en post 5')
  
      // Pasó las validaciones
      return res.json({
        usuarioDB,
        token: 'fkajsdkf'
      })
      
    } catch (error) {
      console.log('error',error)
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      });
    }
  
  });

module.exports = router