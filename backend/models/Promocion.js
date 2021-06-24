const mongoose = require('mongoose');

const PromocionSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    descripcion: {
        type: String,
    },

    fecha_hora_promocion: {
        type: Date,
    },
    descuento: {
        type: Number,
    },
    usuario_promocion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});

module.exports = mongoose.model('Promocion', PromocionSchema);
