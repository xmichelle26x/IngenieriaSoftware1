import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions
} from 'react-native'
import { List, ListItem } from 'native-base'

// Apollo
import { gql, useQuery } from '@apollo/client'

const OBTENER_RESERVAS = gql`
query obtenerReservas {
obtenerReservas{
id
date
matricula
}
}
`

const VerReservas = () => {
// Query de apollo
  const { data, loading, error } = useQuery(OBTENER_RESERVAS, {
    fetchPolicy: 'no-cache'
  })
  // console.log(data)
  // console.log(loading)
  console.log(error)

  if (loading) return <Text>Cargando...</Text>

  return (

    <SafeAreaView style={styles.container}>

      <List
        dataArray={data.obtenerReservas} renderRow={(reserva) =>
          <ListItem>
            <Text style={styles.listText}>
              Matricula: {reserva.matricula}{'\n'}
              Fecha: {reserva.date}
            </Text>
          </ListItem>}
      />

    </SafeAreaView>
  )
}
export default VerReservas

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
  },
  listText: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 2
  }
})
