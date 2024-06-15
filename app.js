const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Arreglo para almacenar las canciones
let canciones = [
  {
    nombre: "Shape of You",
    descripcion: "Single",
    autor: "Ed Sheeran",
    link: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    imagen: "https://i.scdn.co/image/ab67616d0000b273f4d8c4b6f87fcf53bde5f94c"
  },
  {
    nombre: "Blinding Lights",
    descripcion: "Single",
    autor: "The Weeknd",
    link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    imagen: "https://i.scdn.co/image/ab67616d0000b273c17f43d5d754d915fbc4654a"
  },
  {
    nombre: "Dance Monkey",
    descripcion: "Single",
    autor: "Tones and I",
    link: "https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku",
    imagen: "https://i.scdn.co/image/ab67616d0000b2735e67ef5a7eac8955e2a5599b"
  },
  {
    nombre: "Uptown Funk",
    descripcion: "Single",
    autor: "Mark Ronson, Bruno Mars",
    link: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
    imagen: "https://i.scdn.co/image/ab67616d0000b273a0b023551d85275e5e6b56d2"
  },
  {
    nombre: "Someone Like You",
    descripcion: "Single",
    autor: "Adele",
    link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB",
    imagen: "https://i.scdn.co/image/ab67616d0000b2731e4f9e3f2bfb4e4e5729c5a1"
  },
  {
    nombre: "Shape of You (Cover)",
    descripcion: "Cover",
    autor: "Boyce Avenue",
    link: "https://open.spotify.com/track/6cO1u7PR7anf2JQ5r1C7iK",
    imagen: "https://i.scdn.co/image/ab67616d0000b273ff2fb2e25316c35f6b439b3a"
  },
  {
    nombre: "Happier",
    descripcion: "Single",
    autor: "Marshmello, Bastille",
    link: "https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99",
    imagen: "https://i.scdn.co/image/ab67616d0000b273fa7d3e48b8655b2c5f33fceb"
  },
  {
    nombre: "Believer",
    descripcion: "Single",
    autor: "Imagine Dragons",
    link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP",
    imagen: "https://i.scdn.co/image/ab67616d0000b2731aead6e40ae5b90b76ef47e5"
  }
];

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
