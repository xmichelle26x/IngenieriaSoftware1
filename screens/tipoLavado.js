import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, Dimensions,TouchableWithoutFeedback,TouchableOpacity,Keyboard } from 'react-native'
import TodoItem from '../components/iconos'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'

const TipoLavado = ({ route }) => {

  const tipoVehiculo = route.params.tipoVehiculo[0]

  const [tiposLavado] = useState([])

  const [LavCompleta, setLavCom] = useState(false)
  const [flag1, setFlagCom] = useState("")

  const [LimpMotor, setLimMot] = useState(false)
  const [flag2, setFlagMot] = useState("")

  const [LimpIntegral, setLimInt] = useState(false)
  const [flag3, setFlagInt] = useState("")

  const [Encerada, setEnc] = useState(false)
  const [flag4, setFlagEnc] = useState("")

  const navigation = useNavigation()

  const [servicios] = useState([
    { name: 'LAVADA COMPLETA', id: '1' },
    { name: 'LIMPIEZA DE MOTOR', id: '2'},
    { name: 'LIMPIEZA INTEGRAL', id: '3' },
    { name: 'ENCERADA', id: '4'}
  ])
  const pressHandler = (id) => {
    if (id == 1){
      if (LavCompleta == false){
        setLavCom(true);
        setFlagCom("✓");
        tiposLavado.push('LAVADA COMPLETA');
      }
      else{
        setLavCom(false);
        setFlagCom("");
        var indice = tiposLavado.indexOf('LAVADA COMPLETA'); 
        tiposLavado.splice(indice, 1); 
      }
    }

    if (id == 2){
      if (LimpMotor == false){
        setLimMot(true);
        setFlagMot("✓");
        tiposLavado.push('LIMPIEZA DE MOTOR');
      }
      else{
        setLimMot(false);
        setFlagMot("");
        var indice = tiposLavado.indexOf('LIMPIEZA DE MOTOR'); 
        tiposLavado.splice(indice, 1); 
      }
    }

    if (id == 3){
      if (LimpIntegral == false){
        setLimInt(true);
        setFlagInt("✓");
        tiposLavado.push('LIMPIEZA INTEGRAL');
      }
      else{
        setLimInt(false);
        setFlagInt("");
        var indice = tiposLavado.indexOf('LIMPIEZA INTEGRAL'); 
        tiposLavado.splice(indice, 1); 
      }
    }

    if (id == 4){
      if (Encerada == false){
        setEnc(true);
        setFlagEnc("✓");
        tiposLavado.push( 'ENCERADA');
        
      }
      else{
        setEnc(false);
        setFlagEnc("");
        var indice = tiposLavado.indexOf( 'ENCERADA'); 
        tiposLavado.splice(indice, 1); 
        
      }
    }
   
    
  }
  const onChange = () => {
    navigation.navigate('DatosVehiculo', {tiposLavado, tipoVehiculo})
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
                name='desktop'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Escoja una o varias opciones</Text>
            <View style={styles.hr} />

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => pressHandler(1)}
            >
              <Text style={styles.registerButtonText}>Lavada Completa {" "+flag1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => pressHandler(2)}
            >
              <Text style={styles.registerButtonText}>Limpieza de Motor {" "+flag2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => pressHandler(3)}
            >
              <Text style={styles.registerButtonText}>Limpieza Integrada {" "+flag3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => pressHandler(4)}
            >
              <Text style={styles.registerButtonText}>Encerada {" "+flag4}</Text>
            </TouchableOpacity>

            
          </View>
        </View>
        <View style={styles.buttonContainer}>
              <Button
                color= '#003366'
                title='CONTINUAR'
                onPress={onChange}
              />
            </View>
      </View>
      
    </TouchableWithoutFeedback>
  )
} 
export default TipoLavado

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#66C3FE',
    padding: 10,
    marginTop: "0%"
  },
  buttonContainer: {
    marginTop: 30,
    padding: 30,
    
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#003366',
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
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
