import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	Dimensions,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function Login() {


	var iniciarSesion=()=>{
		const{username,password}=this.state;
		if ( username === ''||password==''){
			this.setState({mensajeError:'Ingrese usuario y clave!'})
		}else{
			var dataToSend = {username:username,password:password};
			var formBody = [];
			for (var key in dataToSend) {
				var encodedKey = encodeURIComponent(key);
            	var encodedValue = encodeURIComponent(dataToSend[key]);
            	formBody.push(encodedKey + "=" + encodedValue);
			}
			formBody = formBody.join("&");
			fetch('http://accountsolinal.pythonanywhere.com/api/login', {
            	method: "POST",//Request Type 
            	body: formBody,//post body 
            	headers: {//Header Defination 
                	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            	},
            })
            .then((response) => response.json())
            .then((response) => {
            	if("user" in responseJson){
                    console.log(responseJson)
                    var idUserGlobal = responseJson.user.id;
                    var nameGlobal=responseJson.user.first_name;
                     var userNameGlobal=responseJson.user.username;
                    var emailGlobal=responseJson.user.email;
                    var idEquipoGlobal=responseJson.user.profile.idEquipo;
                    var isAdminGlobal=responseJson.user.profile.isAdmin;
                    //this.props.navigation.navigate('Home')         
                }else{
                    this.setState({mensajeError:'Credenciales incorrectas!'})           
                }
            })
		}
	}

	var mostrarClave=()=>{
        let iconName = (this.state.secureTextEntry)? "eye-off":"eye";
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });
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
						<Text style={styles.loginTitleText}>Inicio de Sesión</Text>
						<View style={styles.hr}></View>
						<View style={styles.inputBox}>
							<Text style={styles.inputLabel}>Usuario</Text>
							<TextInput
								style={styles.input}
								autoCapitalize="none"
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.inputLabel}>Contraseña</Text>
							<TextInput
								style={styles.input}
								autoCapitalize={false}
								secureTextEntry={true}
								textContentType='password'
								minLength={2}
							/>
						</View>
						<TouchableOpacity style={styles.loginButton}>
							<Text style={styles.loginButtonText}>Iniciar Sesión</Text>
						</TouchableOpacity>
						<View>
							<Text
								onPress={()=>this.props.navigation.navigate('Register')}
								style={styles.registerText}>
								¿No tienes cuenta? Regístrate Ahora
							</Text>
						</View>
						<TouchableOpacity>
							<Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
						</TouchableOpacity>
					</View>
				</View>
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
			height: 1,
		},
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
	loginButton: {
		backgroundColor: '#0000FF',
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	loginButtonText: {
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
});