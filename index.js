import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';

// Apollo
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client'

const E40AutolavadoApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => E40AutolavadoApp);
