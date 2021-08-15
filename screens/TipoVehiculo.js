import React , { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const TipoVehiculo = ({ route }) => {
  
  const [tipoVehiculo] = useState([])
  const [flag] = useState([])

  const navigation = useNavigation()

  const eventoImagen = (vehiculo) => {
    if(tipoVehiculo.length > 0){
      tipoVehiculo.splice(0);
      
    }
    tipoVehiculo.push(vehiculo);
    flag.push(true);
    cambio()
  }

  const cambio = () =>{
    if(flag[0] == true){
      navigation.navigate('TipoLavado',{tipoVehiculo})
    }
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>

            <View style={styles.logoBox}>

              <Image
                source={require('../assets/logo.png')}
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: 'center'
                }}
              />
            </View>

            <View style={styles.body}>
              <TouchableOpacity style={styles.ImagenContainer} onPress={() => eventoImagen("Auto")}>
                <Text
                  style={styles.texto}
                >
                  Auto
                </Text>
                <Image
                  source={require('../assets/auto.jpg')}
                  style={{
                    width: 200,
                    height: 100,
                    alignSelf: 'center'
                  }}
                />

              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ImagenContainer} onPress={() => eventoImagen("Camioneta")}>
                <Text
                  style={styles.texto}
                >
                  Camioneta
                </Text>
                <Image
                  source={require('../assets/camioneta.jpg')}
                  style={styles.ImagenSize}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.ImagenContainer} onPress={() => eventoImagen("Furgoneta")}>
                <Text
                  style={styles.texto}
                >
                  Furgoneta
                </Text>
                <Image
                  source={require('../assets/furgoneta.jpg')}
                  style={styles.ImagenSize}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.ImagenContainer} onPress={() => eventoImagen("Cabezal")}>
                <Text
                  style={styles.texto}
                >
                  Cabezal de Trailer
                </Text>
                <Image
                  source={require('../assets/cabezal.jpg')}
                  style={styles.ImagenSize}
                />

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </View>

    </ScrollView>

  )
}
export default TipoVehiculo

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    fontSize: 20
  },
  ImagenSize: {
    width: 200,
    height: 150,
    alignSelf: 'center'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  ImagenContainer: {
    alignItems: 'stretch',
    width: 300,
    height: 200,
    margin: 5
  },
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
    top: '5%'
  },
  authBox: {
    width: '95%',
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
  }
})
