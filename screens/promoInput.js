import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Toast } from 'native-base';
import { useNavigation } from '@react-navigation/core';

export default function promoInput({navigation}){
	return(
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View style={styles.container}>
						<View style={styles.bigCircle}></View>
						<View style={styles.smallCircle}></View>
						<View style={styles.centerizedView}>
							<View style={styles.authBox}>
								<View style={styles.logoBox}>
									<Icon
										color='#fff'
										name='comments'
										type='font-awesome'
										size={50}
									/>
								</View>
								<Text style={styles.inputTitleText}>Formulario para agregar Promoción</Text>
								<View style={styles.hr}></View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Ingrese el Nombre de la Promoción'
										// onChangeText={ } //pasar valor al input
										style={styles.input} 
										autoCapitalize='none'
									/>
								</View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Tipo de Promoción'
										// onChangeText={  } //pasar valor al input
										style={styles.input} 
									/>
								</View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Descripción'
										// onChangeText={  } //pasar valor al input
										style={styles.input}
										autoCapitalize ='none'
									/>
								</View>	
								<View>
									<TouchableOpacity style={styles.loginButton}
										onPress = { () => navigation.navigate("DatePicker") }>
										<Text style={styles.buttonText}>Asignar Fecha</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.loginButton}
										onPress = { () => navigation.navigate("Horario") }>
										<Text style={styles.buttonText}>Asignar Horario</Text>
									</TouchableOpacity>
								</View>								
								<TouchableOpacity 
								style={styles.registerButton}								
								onPress = { () => handleSubmit() }>
									<Text style={styles.registerButtonText}>Registrar</Text>
								</TouchableOpacity>

							</View>
						</View>

						{mensaje && mostrarAlerta()}

					</View>  
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#66C3FE',
	},
	bigCircle: {
		width: Dimensions.get('window').height * 0.5,
		height: Dimensions.get('window').height * 0.5,
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
	centerizedView: {
		width: '100%',
		top: '15%',
	},
	authBox: {
		width: '80%',
		backgroundColor: '#fafafa',
		borderRadius: 20,
		alignSelf: 'center',
		paddingHorizontal: 14,
		paddingBottom: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
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
		elevation: 2,
	},
	loginTitleText: {
		fontSize: 26,
		fontWeight: 'bold',
		marginTop: 10,
		color: '#003366',
		textAlign: 'center'
	},
	hr: {
		width: '100%',
		height: 0.5,
		backgroundColor: '#444',
		marginTop: 6,
	},
	inputBox: {
		marginTop: 10,
	},
	inputLabel: {
		fontSize: 17,
		marginBottom: 6,
	},
	input: {
		width: '100%',
		height: 40,
		backgroundColor: '#dfe4ea',
		borderRadius: 4,
		paddingHorizontal: 10,
	},
	loginButton: {
		backgroundColor: '#003366',
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	loginButtonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	registerText: {
		textAlign: 'center',
		marginTop: 20,
		fontSize: 14,
		color: '#003366',
	},
	forgotPasswordText: {
		textAlign: 'center',
		marginTop: 12,
		fontSize: 14,
		color: '#003366',
	},
});