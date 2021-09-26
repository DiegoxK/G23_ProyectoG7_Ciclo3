import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

//Conexión a base de datos

const uri = 'mongodb://localhost:27017/peluditos';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
    () => {
        console.log("Conexión exitosa")
        },
        err => { err }
);


//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//configuración  de  rutas

app.use('/api', require('./routes/usuario'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//configuración  de puerto automático
app.set('puerto', process.env.PORT || 5502);
app.listen(app.get('puerto'), function () {
    console.log('El servidor nos conecta por el puerto ' + app.get('puerto'));
});