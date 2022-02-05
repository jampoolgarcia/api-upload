// Importacion de las librerias a necesarias
const express = require("espress");
const cors = require("cors");
const multer = require("multer");

// configuracion de multer
const storage = multer.diskStorage({
  // cambia el nombre de los archivos para que no se repitan.
  filename: function(res, file, cb) {
    // obtiene la extencion del archivo original.
    const ext = file.originalname.split(".").pop();
    // genera un numero de milisegundos pasados para poner de nombre.
    const fileName = Date.now();
    // funcion cb que devuelve el nuevo nombre de el archivo
    cb(null, `${fileName}.${ext}`);
  },
  // maneja el destino en el que se almacenara el archivo
  destination: function(res, file, cb) {
    cb(null, `./public`);
  }
});


// Declaracion la variable
const app = express();
const port = process.env.PORT || 3000;
const upload = multer({storage});


// Inicia el middleware cors
app.use(cors());

// rutas
app.post("upload", upload.single(`myFile`), (req, res)=> {
  res.send({ ok: `true` })
});

// Inicia la escucha del servidor y envía un mensaje por consola.
app.listen(port, () => console.log(`Server on port ${port}`));


