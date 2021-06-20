const  {  gql } = require('apollo-server');

const typeDefs = gql`

  type Vehiculo {
    matricula: String
    modelo: String
    color: String
    id: ID
  }

  type Query {
    obtenerVehiculos : [Vehiculo]  
  }

input UsuarioInput {
  usuario: String!
  nombre: String!
  email: String!
  telefono: String!
  contrasena: String!  
}

input AutenticarInput{
  email: String! 
  contrasena: String!
}

input VehiculoInput{
  matricula: String!
  modelo: String
  color: String
}

type Token{
  token: String
}

  type Mutation {

    #Usuarios
    crearUsuario(input: UsuarioInput) : String
    autenticarUsuario(input: AutenticarInput) : Token


    #Vehiculos
    nuevoVehiculo(input: VehiculoInput) : Vehiculo

    #Lavados
  }

`;

module.exports = typeDefs;