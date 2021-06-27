import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';


import Inicio from './screens/Inicio'
import InicioSesion from './screens/InicioSesion'
import Registro from './screens/Registro'
import TipoVehiculo from './screens/TipoVehiculo'
import PantallaPrincipal from './screens/PantallaPrincipal'
import VerReservas from './screens/VerReservas'
import TipoLavado from './screens/tipoLavado'
import Horario from './screens/Horario'
import Pago from './screens/Pago'
import DatosVehiculo from './screens/DatosVehiculo'
//import promoInput from './screens/promoInput';
import promoMain from './screens/promoMain';
import DatePickerr from './screens/DatePickerr';
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

const Stack = createStackNavigator()

const App = () => {
	return (
		<>
			<ApolloProvider client={client}>
				<Root>
					<NavigationContainer>
						<Stack.Navigator initialRouteName='Inicio'>
							<Stack.Screen
								name='Inicio'
								component={Inicio}
								options={{
									title: 'Inicio'
								}}
							/>

							<Stack.Screen
								name='InicioSesion'
								component={InicioSesion}
								options={{
									title: 'Iniciar Sesión'
								}}
							/>

							<Stack.Screen
								name='Registro'
								component={Registro}
								options={{
									title: 'Registro'
								}}
							/>

							<Stack.Screen
								name='TipoVehiculo'
								component={TipoVehiculo}
								options={{
									title: 'Tipo de vehículo'
								}}
							/>

							<Stack.Screen
								name='TipoLavado'
								component={TipoLavado}
								options={{
									title: 'Tipo de lavado'
								}}
							/>

							<Stack.Screen
								name='Pago'
								component={Pago}
								options={{
									title: 'Pago'
								}}
							/>

							<Stack.Screen
								name='DatosVehiculo'
								component={DatosVehiculo}
								options={{
									title: 'Datos del Vehiculo'
								}}
							/>

							<Stack.Screen
								name='VerReservas'
								component={VerReservas}
								options={{
									title: 'Ver Reservas'
								}}
							/>

							<Stack.Screen
								name='PantallaPrincipal'
								component={PantallaPrincipal}
								options={{
									title: 'Pantalla Principal'
								}}
							/>
							<Stack.Screen
								name="Horario"
								component={Horario}
								options={{
									title: "Horario"
								}} />

							<Stack.Screen
								name="promoMain"
								component={promoMain}
								options={{
									title: "Lista de Promos"
								}} />

							<Stack.Screen
								name="DatePicker"
								component={DatePickerr}
								options={{
									title: "Selector de Fecha"
								}}
							/>
							{/* <Stack.Screen
							name="promoInput"
							component={promoInput}
							options={{
								title: "Form para Promo"
							}} /> */}

						</Stack.Navigator>
					</NavigationContainer>
				</Root>
			</ApolloProvider>
		</>
	);
};


export default App
