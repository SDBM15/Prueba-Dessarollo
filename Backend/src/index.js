const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importar el enrutador de rutas
const routes = require('./routes/index');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

// Importar la conexión a la base de datos
require('./database');

// Usar las rutas definidas en routes/index.js
app.use('/api', routes);

app.listen(port, () => {
  console.log('Servidor funcionando perfectamente',3002);
});
