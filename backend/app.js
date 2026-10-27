const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para permitir peticiones desde el frontend
app.use(cors());
app.use(express.json());

// Router para soportar tanto "/" como "/backend"
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: '¡Hola Mundo desde el Backend de Node.js en cPanel (/backend)!',
    timestamp: new Date().toISOString()
  });
});

router.get('/status', (req, res) => {
  res.json({
    status: 'online',
    server: 'Node.js Express en cPanel Passenger',
    endpoint: '/backend/status',
    nodeVersion: process.version,
    uptime: process.uptime()
  });
});

// Montar en la raíz y en /backend para máxima compatibilidad con Passenger y local
app.use('/backend', router);
app.use('/', router);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});
