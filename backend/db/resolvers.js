
const Usuario = require('../models/Usuario');
const Vehiculo = require('../models/Vehiculo');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});


//Crea y firma un JWT
const crearToken = (usuario, secreta, expiresIn) => {
  const { id, email, nombre } = usuario;
  return jwt.sign({ id, email, nombre }, secreta, { expiresIn } );
}

const resolvers = {

  Query: {
    obtenerVehiculos: async (_, {}, ctx) => {
      const vehiculos = await Vehiculo.find({ propietario: ctx.usuario.id });
      

    }
  },

  Mutation: {

    //USUARIO-----------
    crearUsuario : async ( _, {input} ) => {
      const { email, contrasena } = input;
      const existeUsuario = await Usuario.findOne({ email });
      
      //si el usuario existe
      if(existeUsuario) { 
        throw new Error('El usuario ya está registrado');
      }
      try {
        //Hashear contraseña
        const salt = await bcryptjs.genSalt(10);
        input.contrasena = await bcryptjs.hash(contrasena, salt);

        const nuevoUsuario = new Usuario(input);
        nuevoUsuario.save();
        return 'Usuario creado correctamente'

      } catch (error) {
        console.log(error);
      }
    },


    //Autentifica el login
    autenticarUsuario: async ( _, {input} ) => {
      const { email, contrasena } = input;
      const existeUsuario = await Usuario.findOne({ email });

      //Si el usuario existe
      if(!existeUsuario) { 
        throw new Error('El usuario no existe');
      }

      //Si la contraseña es correcta
      const contrasenaCorrecta = await bcryptjs.compare(contrasena, existeUsuario.contrasena);
      if (!contrasenaCorrecta){
        throw new Error('Contraseña incorrecta');
      }

      //Dar acceso
      return {
        token: crearToken(existeUsuario, process.env.SECRETA, '2hr')
      }
    },

    //VEHICULO----------------
    nuevoVehiculo: async ( _, {input}, ctx ) => {
      console.log('RESOLVER', ctx)
      try {
        const vehiculo = new Vehiculo(input);
        //asociar el vehiculo con el usuario auntenticado
        vehiculo.propietario = ctx.usuario.id;

        //almacenar en la BD
        const resultado = await vehiculo.save();
        return resultado;
      } catch (error) {
          console.log(error);
      }
    }


  }
}

module.exports = resolvers;