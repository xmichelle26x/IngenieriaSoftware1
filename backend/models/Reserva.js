const mongoose = require('mongoose')

const ReservaSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    trim: true
  },
  matricula: {
    type: String,
    trim: true
  },
  tipoLavado: {
    type: String,
    trim: true
  },
  tipoVehiculo: {
    type: String,
    trim: true
  },
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },

})

module.exports = mongoose.model('Reserva', ReservaSchema)
