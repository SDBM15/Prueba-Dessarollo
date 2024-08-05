// conectar data base
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/trasnporte')
  .then(() => console.log('Conectado a la base de datoss'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

