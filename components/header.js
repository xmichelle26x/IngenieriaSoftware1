import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>SELECCIONE LOS TIPOS DE SERVICIOS QUE DESEE PARA SU VEHICULO</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      height: 120,
      paddingTop: 38,
      backgroundColor: 'blue',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });