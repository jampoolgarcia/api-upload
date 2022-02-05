// Importacion de las librerias a necesarias
const express = required("espress");
const cors = required("cors");
const multer = require("multer");

// Declaracion la variable app con lo que me devuelve express
const app = express();

// Inicia el middleware cors
app.use(cors());

// Inicia la escucha del servidor y envía un mensaje por consola.
app.listen(3000, ()=> console.log("Server on"));


