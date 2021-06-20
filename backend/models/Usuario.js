const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,
    trim: true
  },
  telefono:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  fechaRegistro:{
    type: Date,
    default: Date.now(),
  },
  usuario:{
    type: String,
    required: true,
    trim: true
  },
  contrasena:{
    type: String,
    required: true,
    trim: true
  },

});


module.exports = mongoose.model('Usuario', UsuarioSchema);