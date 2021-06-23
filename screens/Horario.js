import React, { useState } from 'react'
import { View, Button, Platform, Keyboard, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Icon } from 'react-native-elements'
import { Toast } from 'native-base'
import { useNavigation } from '@react-navigation/core'

// Apollo
import { gql, useMutation } from '@apollo/client'

const NUEVA_RESERVA = gql`
mutation crearReserva($input: ReservaInput) {
  crearReserva(input : $input)

}
`

const Horario = ({ route }) => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const [mensaje, guardarMensaje] = useState(null)

  // React navigation
  const navigation = useNavigation()
  const matricula = route.params.matricula
  console.log(route.params.matricula)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }
  // Mutation de apollo
  const [crearReserva] = useMutation(NUEVA_RESERVA)

  const handleSubmit = async () => {
    // guardar el horario

    try {
      const { data } = await crearReserva({
        variables: {
          input: {
            date,
            matricula
          }
        }
      })

      guardarMensaje(data.crearReserva)
      navigation.navigate('PantallaPrincipal')
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
                name='calendar'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Seleccione un horario</Text>
            <View style={styles.hr} />
            <View>
              <Button onPress={showDatepicker} title='Elegir Fecha' />
            </View>
            <View style={styles.hr} />
            <View>
              <Button onPress={showTimepicker} title='Elegir Hora' />
            </View>
            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour
                display='default'
                onChange={onChange}
              />
            )}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.loginButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {mensaje && mostrarAlerta()}
      </View>
    </TouchableWithoutFeedback>
  )
}
export default Horario

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
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
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
  loginButton: {
    backgroundColor: '#0000FF',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4
  },
  loginButtonText: {
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
