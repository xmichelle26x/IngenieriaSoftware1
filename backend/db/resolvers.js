
const Usuario = require('../models/Usuario')
const Vehiculo = require('../models/Vehiculo')
const Reserva = require('../models/Reserva')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Promocion = require('../models/Promocion');
require('dotenv').config({ path: 'variables.env' })

// Crea y firma un JWT
const crearToken = (usuario, secreta, expiresIn) => {
  const { id, email, nombre } = usuario
  return jwt.sign({ id, email, nombre }, secreta, { expiresIn })
}

const resolvers = {

  Query: {

    obtenerReservas: async (_, { }, ctx) => {
      const reservas = await Reserva.find({ propietario: ctx.usuario.id })

      return reservas
    },
    obtenerVehiculos: async (_, { }, ctx) => {
      const vehiculos = await Vehiculo.find({ propietario: ctx.usuario.id });

    },
    obtenerPromociones: async (_, { }, ctx) => {
      const promociones = await Promocion.find({});
      return promociones
    }

  },

  Mutation: {

    // USUARIO-----------
    crearUsuario: async (_, { input }) => {
      const { email, contrasena } = input
      const existeUsuario = await Usuario.findOne({ email })

      // si el usuario existe
      if (existeUsuario) {
        throw new Error('El usuario ya está registrado')
      }
      try {
        // Hashear contraseña
        const salt = await bcryptjs.genSalt(10)
        input.contrasena = await bcryptjs.hash(contrasena, salt)

        const nuevoUsuario = new Usuario(input)
        nuevoUsuario.save()
        return 'Usuario creado correctamente'
      } catch (error) {
        console.log(error)
      }
    },

    // Autentifica el login
    autenticarUsuario: async (_, { input }) => {
      const { email, contrasena } = input
      const existeUsuario = await Usuario.findOne({ email })

      // Si el usuario existe
      if (!existeUsuario) {
        throw new Error('El usuario no existe')
      }

      // Si la contraseña es correcta
      const contrasenaCorrecta = await bcryptjs.compare(contrasena, existeUsuario.contrasena)
      if (!contrasenaCorrecta) {
        throw new Error('Contraseña incorrecta')
      }

      // Dar acceso
      return {
        token: crearToken(existeUsuario, process.env.SECRETA, '2hr')
      }
    },

    // VEHICULO----------------
    crearVehiculo: async (_, { input }, ctx) => {
      console.log('RESOLVER', ctx)
      try {
        const vehiculo = new Vehiculo(input)
        // asociar el vehiculo con el usuario auntenticado
        vehiculo.propietario = ctx.usuario.id

        // almacenar en la BD
        vehiculo.save()
        return 'guardado con �xito'
      } catch (error) {
        console.log(error)
      }
    },

    crearReserva: async (_, { input }, ctx) => {
      console.log('RESOLVER', ctx)
      try {
        const reserva = new Reserva(input)

        // asociar el vehiculo y el usuario auntenticado con la reserva
        reserva.propietario = ctx.usuario.id

        // almacenar en la BD
        reserva.save()
        return 'Reserva guardada correctamente'
      } catch (error) {
        console.log(error)
      }
    }

  }
}

module.exports = resolvers
