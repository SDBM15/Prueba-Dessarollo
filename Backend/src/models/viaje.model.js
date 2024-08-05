const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViajeSchema = new Schema({
    distancia: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    transportistaId: {
        type: Schema.Types.ObjectId,
        ref: 'Transportista',
        required: true
    },
    tarifa: {  // Nuevo campo para la tarifa
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Viaje', ViajeSchema);

module.exports = mongoose.model('Viaje', ViajeSchema);





