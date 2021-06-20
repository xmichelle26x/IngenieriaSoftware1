const mongoose = require('mongoose');

const VehiculoSchema = new mongoose.Schema({
  matricula:{
    type: String,
    required: true,
    trim: true
  },
  color:{
    type: String,
    required: true, 
  },
  modelo:{
    type: String,
    required: true, 
  },
  propietario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
})

module.exports = mongoose.model('Vehiculo', VehiculoSchema);