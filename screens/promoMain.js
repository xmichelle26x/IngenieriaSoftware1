import React, { Component } from 'react';
import {
	StyleSheet,
	Dimensions,

	View,
	TouchableOpacity,
	TouchableWithfeedback,
	SafeAreaView,
	ScrollView,
	ToastAndroid

} from 'react-native';
import { Card, CardItem, Text } from 'native-base';
// import { Card, CardItem } from 'react-native-elements';


const promoMain = () => {
	const handleSubmitPromo = () => {

		ToastAndroid.showWithGravityAndOffset(
			'Promocion escodigo, ahora retrocede y crea una reserva',
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM,
			400,
			400
		)
	}
	return (

		<ScrollView>
			{/* <SafeAreaView style={styles.container}> */}

			<View style={styles.container}>
				<View style={styles.bigCircle}></View>
				<View style={styles.smallCircle}></View>
				<View style={styles.centerizedView}>
					<View style={styles.body}>
						<Card style={styles.tamanoCard}>
							<TouchableOpacity>
								<CardItem>
									<Text>Nombre: Promocion 2 M</Text>
								</CardItem>
								<CardItem>
									<View>
										<Text>
											Días: Martes y Miércoles
										</Text>
										<Text>
											Descripción: Si traes el segundo a carro a la lavadora, pagarás el segundo carro a mitad de precio.
										</Text>
									</View>
								</CardItem>

								<CardItem footer bordered>
									<View>
										<TouchableOpacity style={styles.editButton}
											onPress={() => handleSubmitPromo()}>
											<Text style={styles.buttonText}>Escoger</Text>
										</TouchableOpacity>

									</View>
								</CardItem>
							</TouchableOpacity>

						</Card>
						<Card style={styles.tamanoCard}>
							<TouchableOpacity>
								<CardItem>
									<Text>Nombre: Descuento 20% en taxis amarillos y ejecutivos</Text>
								</CardItem>
								<CardItem>
									<View>
										<Text>
											Días: Martes, miércoles y jueves
										</Text>
										<Text>
											Descripción: Precios especiales para Taxistas (Amarillos y ejecutivos) descuento del 20%
										</Text>
									</View>
								</CardItem>

								<CardItem footer bordered>
									<View>
										<TouchableOpacity style={styles.editButton}
											onPress={() => handleSubmitPromo()}>
											<Text style={styles.buttonText}>Escoger</Text>
										</TouchableOpacity>

									</View>
								</CardItem>
							</TouchableOpacity>

						</Card>

					</View>
				</View>
			</View>
		</ScrollView>
		//</SafeAreaView>

	)

}
export default promoMain


const styles = StyleSheet.create({
	body: {
		alignItems: 'center',
		// justifyContent: '',
		height: 1000

	},
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#66C3FE',
	},
	tamanoCard: {
		width: 330,
		height: 250,
		marginLeft: 15
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
	deleteButton: {
		backgroundColor: '#eb4d4b',
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	editButton: {
		backgroundColor: '#003366',
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	buttonText: {
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