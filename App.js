import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./routes/StackS1";

import Login from './screens/Login';
import Register from './screens/Register';

// const Stack = createStackNavigator({
// 	Register:Register,
// 	Login:Login,
// 	},
// 	{
// 		headerMode: 'none',
// 		initialRouteName: 'Login'
// 	}
// );

// export default createAppContainer(Stack);
export default function App (){
    return (
      <Navigator/>      
    );

}
