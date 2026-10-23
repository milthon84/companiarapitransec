const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para permitir peticiones desde el frontend en React
app.use(cors());
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: '¡Hola Mundo desde el Backend de Node.js en cPanel!',
    timestamp: new Date().toISOString()
  });
});

// Ruta API de prueba
app.get('/api', (req, res) => {
  res.json({
    status: 'success',
    message: '¡Hola Mundo desde la ruta /api!',
    timestamp: new Date().toISOString()
  });
});

// Endpoint de estado del servidor
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    server: 'Node.js Express en cPanel Passenger',
    nodeVersion: process.version,
    uptime: process.uptime()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});
