// Importación de las librerías a necesarias
const express = require("express");
const cors = require("cors");
const multer = require("multer");

// Configuración de multer
const storage = multer.diskStorage({
  // Cambia el nombre de los archivos para que no se repitan.
  filename: function(res, file, cb) {
    // Obtiene la extensión del archivo original.
    const ext = file.originalname.split(".").pop();
    // Genera un numero de milisegundos pasados para poner de nombre.
    const fileName = Date.now();
    // Función cb que devuelve el nuevo nombre de el archivo
    cb(null, `${fileName}.${ext}`);
  },
  // Maneja el destino en el que se almacenara el archivo
  destination: function(res, file, cb) {
    cb(null, `./public`);
  }
});

// Declaración la variable
const app = express();
const port = process.env.PORT || 3000;
const upload = multer({storage});

// Configuración de carpeta publica
app.use(express.static(`./public`));

// Inicia el middleware cors
app.use(cors());

// rutas
app.post("/upload", upload.single(`myFile`), (req, res)=> {
  const fileName = req.file.filename;
  res.send({ 
    ok: `true`,
    url: `http://localhost:3000/${fileName}` 
  })
});

// Inicia la escucha del servidor y envía un mensaje por consola.
app.listen(port, () => console.log(`Server on port ${port}`));


