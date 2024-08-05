const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true }
});

module.exports = mongoose.model('Sucursal', sucursalSchema);

//http://localhost:3002/api/sucursales