const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransportistaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transportista', TransportistaSchema);
