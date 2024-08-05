const mongoose = require('mongoose');

const asignacionSchema = new mongoose.Schema({
  colaboradorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Colaborador', required: true },
  sucursalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sucursal', required: true },
  distanciaKm: { type: Number, required: true, min: 1, max: 50 }
});

asignacionSchema.index({ colaboradorId: 1, sucursalId: 1 }, { unique: true });

module.exports = mongoose.model('Asignacion', asignacionSchema);


//URL: http://localhost:3002/api/asignaciones
