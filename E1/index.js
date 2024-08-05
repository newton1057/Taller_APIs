// Importar paquetes necesarios
import express from 'express';
import dotenv from 'dotenv';
//import bodyParser from 'body-parser';

// Cargar las variables de entorno desde el archivo .env (NOTE: El archivo .env debe estar en la raíz del proyecto)
dotenv.config();

const PORT = process.env.PORT || 3000; // Obtener el puerto desde las variables de entorno

const app = express();

// Middleware para parsear datos en formato JSON
//app.use(express.json());

// Middleware para parsear datos de formularios
//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
}); 