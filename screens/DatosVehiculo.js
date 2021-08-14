import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Toast } from 'native-base'
import { useNavigation } from '@react-navigation/core'

// Apollo
import { gql, useMutation } from '@apollo/client'

const NUEVO_VEHICULO = gql`
mutation crearVehiculo($input: VehiculoInput) {
  crearVehiculo(input : $input)
}

`

const DatosVehiculo = ({ route }) => {
  const [matricula, guardarMatricula] = useState('')
  const [color, guardarColor] = useState('')
  const [modelo, guardarModelo] = useState('')
  const tipoLavado = route.params.tiposLavado
  const [mensaje, guardarMensaje] = useState(null)

  // React navigation
  const navigation = useNavigation()

  // Mutation de apollo
  const [crearVehiculo] = useMutation(NUEVO_VEHICULO)

  // cuando se presiona registrar
  const handleSubmit = async () => {
    // validar
    if (matricula === '' || color === '' || modelo === '') {
      // Mostrar error
      guardarMensaje('Todos los campos son obligatorios')
      return
    }

    // guardar el usuario

    try {
      const { data } = await crearVehiculo({
        variables: {
          input: {
            matricula,
            color,
            modelo

          }
        }
      })

      guardarMensaje(data.nuevoVehiculo)

      navigation.navigate('Horario', { matricula,tipoLavado })
    } catch (error) {
      guardarMensaje(error.message.replace('GraphQL error: ', ''))
    }
  }

  // muestra un mensaje toast
  const mostrarAlerta = () => {
    Toast.show({
      text: mensaje,
      registerButtonText: 'OK',
      duration: 4000
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='car'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Ingrese los datos del vehiculo</Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <TextInput
                placeholder='Matricula del Vehiculo'
                onChangeText={texto => guardarMatricula(texto)} // pasar valor al input
                style={styles.input}
                autoCapitalize='none'
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                placeholder='Color del Vehiculo'
                onChangeText={texto => guardarColor(texto)} // pasar valor al input
                style={styles.input}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                placeholder='Modelo del Vehiculo'
                onChangeText={texto => guardarModelo(texto)} // pasar valor al input
                style={styles.input}
                autoCapitalize='none'
              />
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.registerButtonText}>Guardar</Text>
            </TouchableOpacity>

          </View>
        </View>

        {mensaje && mostrarAlerta()}

      </View>
    </TouchableWithoutFeedback>
  )
}
export default DatosVehiculo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#66C3FE'
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#49A5FC',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#55B1FC',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * -0.2,
    bottom: Dimensions.get('window').width * -0.3
  },
  centerizedView: {
    width: '100%',
    top: '15%'
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6
  },
  inputBox: {
    marginTop: 10
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10
  },
  registerButton: {
    backgroundColor: '#003366',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 10
  }
})
