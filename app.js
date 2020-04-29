//Esto es para levantar el servidor
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Conexion a DB
const mongoose = require('mongoose');

//const uri = 'mongodb://localhost:27017/database';

//Conexion en la nube
const uri = 'mongodb+srv://FernandaM:7453CPSaDfokGcTO@keafmart-1bcj2.mongodb.net/database?retryWrites=true&w=majority';


const options = {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a mongoDB') },
    /** handle initial connection error */
    err => { console.log(err) }
  );

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
app.use('/add',require('./routes/categorias'));
app.use('/add',require('./routes/ordenes'));
app.use('/add',require('./routes/productos'));
app.use('/add',require('./routes/usuarios'));
app.use('/add',require('./routes/administradores'));
app.use('/add',require('./routes/registros'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Escuchando en el puerto: ', app.get('puerto'));
});

//morgan Nos sirve para pintar las peticiones HTTP request que se solicitan a nuestro aplicación
//cors, Nos sirve para configurar nuestro servidor para que se puedan hacer peticiones desde otros dominios
//el public en el path.json aqui es del nombre de la carpeta public para usar lo de esa carpeta
