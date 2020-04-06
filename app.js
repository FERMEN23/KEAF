//Esto es para levantar el servidor
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Escuchando en el puerto'+ app.get('puerto'));
});

//morgan Nos sirve para pintar las peticiones HTTP request que se solicitan a nuestro aplicación
//cors, Nos sirve para configurar nuestro servidor para que se puedan hacer peticiones desde otros dominios
//el public en el path.json aqui es del nombre de la carpeta public para usar lo de esa carpeta
