import React, {useState } from 'react'
import { 	StyleSheet, 
					Text, 
					View, 
					TextInput, 
					Dimensions, 
					TouchableOpacity, 
					TouchableWithoutFeedback, 
					Keyboard 
				} from 'react-native';
import { Toast } from 'native-base';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Apollo 
import { gql, useMutation } from '@apollo/client';

const AUTENTICAR_USUARIO = gql` 
mutation autenticarUsuario($input: AutenticarInput){
  autenticarUsuario(input: $input){
    token
  }
}

`;

const Login = () => {

	//State del formulario
	const [email, guardarEmail] = useState('');
  const [contrasena, guardarContrasena] = useState('');
	const [mensaje, guardarMensaje] = useState(null);

	//React navigation
	const navigation = useNavigation();

 // Mutation de apollo
 const [ autenticarUsuario ] = useMutation(AUTENTICAR_USUARIO);

	//cuando el usuario presiona iniciar sesión 
	const handleSubmit = async () => {
		//validar
		if( email === "" || contrasena === "" ){
			//Mostrar error
			guardarMensaje('Todos los campos son obligatorios')
			return;
		}
		//contraseña al menos 6 caracteres
		if(contrasena.length < 6){
			guardarMensaje('La contraseña debe tener al menos 6 caracteres');
			return;
		} 
	
		try {
			const { data } = await autenticarUsuario({
					variables: {
							input: {  
									email, 
									contrasena
							}
					}  
			});
		
			const { token } = data.autenticarUsuario;
			
			//colocar token en storage 
			await AsyncStorage.setItem('token', token);

			//redireccionar a tipo de carro 
			navigation.navigate('PantallaPrincipal');


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
							<Icon color='#fff' 
							name='comments' 
							type='font-awesome' 
							size={40}/>
						</View>

						<Text style={styles.loginTitleText}>Inicio de Sesión</Text>

						<View style={styles.hr}></View>

						<View style={styles.inputBox}>
							<Text style={styles.inputLabel}>Correo electrónico</Text>
							<TextInput style={styles.input}
												 onChangeText={ texto => guardarEmail(texto) }/>
						</View>

						<View style={styles.inputBox}>
							<Text style={styles.inputLabel}>Contraseña</Text>
							<TextInput
								style={styles.input}
								onChangeText={ texto => guardarContrasena(texto) }
								secureTextEntry={true}
								textContentType='password'
								minLength={6}
								/>
						</View>

						<TouchableOpacity style={styles.loginButton}
						onPress = { () => handleSubmit() }>
							<Text style={styles.loginButtonText}>Iniciar Sesión</Text>
						</TouchableOpacity>

						<View>
							<Text
								onPress={()=> navigation.navigate('Register')}
								style={styles.registerText}>
								¿No tienes cuenta? Regístrate Ahora
							</Text>
						</View>

						{/* <TouchableOpacity>
							<Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
						</TouchableOpacity> */}

					</View>
				</View>

				{mensaje && mostrarAlerta()}

			</View>

		</TouchableWithoutFeedback>
	);
}
export default Login;



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