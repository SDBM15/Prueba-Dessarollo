const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true }
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);

//http://localhost:3002/api/colaboradores