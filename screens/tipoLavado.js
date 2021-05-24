import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from '../components/iconos';

export default function tipoLavado({navigation}) {
  const [servicios, setServicios] = useState([
    { name: 'LAVADA COMPLETA', id: '1' },
    { name: 'LIMPIEZA DE MOTOR', id: '2' },
    { name: 'LIMPIEZA INTEGRAL', id: '3' },
    { name: 'ENCERADA', id: '4' },
  ]);
  const pressHandler = (id) => {
    console.log(id);
  }
  const onChangue=()=>{
    navigation.navigate("Schedule");
  }

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={require('../assets/servicio 1.png')}        
      />
       */}
   

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={servicios}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}><TodoItem/>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
        <View style={styles.buttonContainer}>
          <Button title='CONTINUAR'
          onPress={onChangue}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
		position: 'relative',
		backgroundColor: '#66C3FE',
  },
  buttonContainer: {
    marginTop: 20,
    padding: 30,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'red',
    borderRadius: 30,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
  bigCircle: {
		width: Dimensions.get('window').height * 0.7,
		height: Dimensions.get('window').height * 0.7,
		backgroundColor: '#49A5FC',
		borderRadius: 1000,
		position: 'absolute',
		right: Dimensions.get('window').width * 0.25,
		top: -50,
	},
	smallCircle: {
		width: Dimensions.get('window').height * 0.4,
		height: Dimensions.get('window').height * 0.4,
		backgroundColor: '#55B1FC',
		borderRadius: 1000,
		position: 'absolute',
		right: Dimensions.get('window').width * -0.2,
		bottom: Dimensions.get('window').width * -0.3,
  },
});
