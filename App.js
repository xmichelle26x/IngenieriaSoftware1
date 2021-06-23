  
// import React, { Component } from 'react'; 
// import { createStackNavigator } from 'react-navigation-stack'; 
// import Navigator from "./routes/StackS1";

// import Login from './screens/Login';
// import Register from './screens/Register';
// import { ApolloProvider } from '@apollo/client'
// import client from './config/apollo';

// const Stack = createStackNavigator({
// 	Register:Register,
// 	Login:Login,
// 	},
// 	{
// 		headerMode: 'none',
// 		initialRouteName: 'Login'
// 	}
// );

// // export default createAppContainer(Stack);
// export default function App (){
//     return (
// 			<ApolloProvider client={client}>
//       <Navigator/>    
// 			</ApolloProvider>  
//     );

// }



import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';


import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import TipoVehiculo from './screens/TipoVehiculo';
import PantallaPrincipal from './screens/PantallaPrincipal';
import VerReservas from './screens/VerReservas';
import TipoLavado from './screens/TipoLavado';
import Horario from './screens/Horario'; 
import Pago from './screens/Pago'; 
import DatosVehiculo from './screens/DatosVehiculo';
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo';


const Stack = createStackNavigator();

const App = () => {
  return (
		<> 
		<ApolloProvider client={client}>
		<Root>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
		 				<Stack.Screen
							name="Inicio"
							component={Home}
							options={{
								title:"Inicio"
							}}/>

						<Stack.Screen 
							name="Login"
							component={Login}
		          options={{
		          title: "Iniciar Sesión", 
		           }}
		           />


						<Stack.Screen
							name="Register"
							component={Register}
							options={{
							title:"Registro"
							}}/>

						<Stack.Screen
							name="TipoVehiculo"
							component={TipoVehiculo}
							options={{
							title:"Tipo de vehículo"
							}}/>	


						<Stack.Screen
							name="TipoLavado"
							component={TipoLavado}
							options={{
							title:"Tipo de lavado"
							}}/>

						<Stack.Screen
							name="Horario"
							component={Horario}
							options={{
							title:"Horario"
							}}/>		

						<Stack.Screen
							name="Pago"
							component={Pago}
							options={{
							title:"Pago"
							}}/>	

						<Stack.Screen
							name="DatosVehiculo"
							component={DatosVehiculo}
							options={{
							title:"Datos del Vehiculo"
							}}/>

						<Stack.Screen
							name="VerReservas"
							component={VerReservas}
							options={{
							title:"Ver Reservas"
							}}/>
							
						<Stack.Screen
							name="PantallaPrincipal"
							component={PantallaPrincipal}
							options={{
							title:"Pantalla Principal"
							}}/>

						

						</Stack.Navigator>
    </NavigationContainer>
		</Root> 
		</ApolloProvider>
		</>
  );
};

export default App;