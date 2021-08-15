const { gql } = require('apollo-server');

const typeDefs = gql`

  type Vehiculo {
    matricula: String
    modelo: String
    color: String
    id: ID
  }
  
  type Reserva {
    date: String
    matricula: String
    tipoLavado: String
    tipoVehiculo: String
    id: ID
  }


  type Promocion{
    name:String
    descripcion: String
    descuento:String
  
  }
  type Query {
    obtenerReservas : [Reserva]
    obtenerVehiculos : [Vehiculo]
    obtenerPromociones: [Promocion]


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
  modelo: String!
  color: String!
}

input ReservaInput{
  date: String!
  matricula: String!
  tipoLavado: String!
  tipoVehiculo: String!
}


type Token{
  token: String
}

  type Mutation {

    #Usuarios
    crearUsuario(input: UsuarioInput) : String
    autenticarUsuario(input: AutenticarInput) : Token


    #Vehiculos
    crearVehiculo(input: VehiculoInput) : String

    #Reservas
    crearReserva(input: ReservaInput) : String

    #Lavados
  }

`

module.exports = typeDefs
