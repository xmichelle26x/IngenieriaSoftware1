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

//Apollo 
import { gql, useMutation } from '@apollo/client';

const NUEVA_CUENTA = gql`
mutation crearUsuario($input: UsuarioInput) {
  crearUsuario(input : $input)
}

`;


 const Register = () =>{

	const [usuario, guardarUsuario] = useState('');
	const [nombre, guardarNombre] = useState('');
	const [email, guardarEmail] = useState('');
	const [telefono, guardarTelefono] = useState('');
	const [contrasena, guardarContrasena] = useState('');

	const [mensaje, guardarMensaje] = useState(null);

	//React navigation
	const navigation = useNavigation();

 // Mutation de apollo
 const [ crearUsuario ] = useMutation(NUEVA_CUENTA);


	//cuando se presiona registrar
	const handleSubmit = async () => {
		//validar
		if( usuario === "" || nombre === "" || email === "" || contrasena === "" || telefono === "" ){
			//Mostrar error
			guardarMensaje('Todos los campos son obligatorios')
			return;
		}
		//contraseña al menos 6 caracteres
		if(contrasena.length < 6){
			guardarMensaje('La contraseña debe tener al menos 6 caracteres');
			return;
		} 
		
		// guardar el usuario

		try {
			const { data } = await crearUsuario({
					variables: {
							input: {
									usuario,
									nombre, 
									email,
									telefono,
									contrasena
							}
					}
			});

			guardarMensaje(data.crearUsuario);
			navigation.navigate('Login');


	} catch (error) {
			guardarMensaje(error.message.replace('GraphQL error: ', ''));
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
								<Text style={styles.loginTitleText}>Ingrese sus datos</Text>
								<View style={styles.hr}></View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Nombre de usuario'
										onChangeText={ texto => guardarUsuario(texto) } //pasar valor al input
										style={styles.input} 
										autoCapitalize='none'
									/>
								</View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Nombres completos'
										onChangeText={ texto => guardarNombre(texto) } //pasar valor al input
										style={styles.input} 
									/>
								</View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Email'
										onChangeText={ texto => guardarEmail(texto) } //pasar valor al input
										style={styles.input}
										autoCapitalize ='none'
									/>
								</View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Teléfono'
										onChangeText={ texto => guardarTelefono(texto) } //pasar valor al input
										style={styles.input} 
										keyboardType = 'numeric'
										maxLength={10}
										autoCapitalize ='none' 
									/>
								</View>
								<View style={styles.inputBox}>
									<TextInput
										placeholder='Contraseña'
										onChangeText={ texto => guardarContrasena(texto) } //pasar valor al input
										style={styles.input} 
										autoCapitalize ='none'
										secureTextEntry={true}
										textContentType='password'
										minLength={6}
									/>
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
export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#66C3FE',
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
		shadowOffset: {
			width: 0,
			height: 2,
		},
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
		fontSize: 18,
		marginBottom: 6,
	},
	input: {
		width: '100%',
		height: 40,
		backgroundColor: '#dfe4ea',
		borderRadius: 4,
		paddingHorizontal: 10,
	},
	registerButton: {
		backgroundColor: '#003366',
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	registerButtonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
	registerText: {
		textAlign: 'center',
		marginTop: 20,
		fontSize: 16,
	},
	forgotPasswordText: {
		textAlign: 'center',
		marginTop: 12,
		fontSize: 16,
	},
	scrollContainer: {
        flex: 1,
		paddingTop: 40,
        paddingBottom: 10,
    },
});