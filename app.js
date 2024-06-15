const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Datos de ejemplo
let canciones = [];

// Ruta para obtener todas las canciones
app.get('/canciones', (req, res) => {
  res.json(canciones);
});

// Ruta para agregar una nueva canción
app.post('/canciones', (req, res) => {
  const nuevaCancion = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    autor: req.body.autor,
    link: req.body.link,
    imagen: req.body.imagen
  };
  canciones.push(nuevaCancion);
  res.status(201).json(nuevaCancion);
});

// Ruta para obtener una canción por nombre
app.get('/canciones/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const cancion = canciones.find(c => c.nombre === nombre);
  if (cancion) {
    res.json(cancion);
  } else {
    res.status(404).json({ error: 'Canción no encontrada' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
