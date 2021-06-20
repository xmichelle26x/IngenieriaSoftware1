import React from "react";
import { useState } from "react";
import {StyleSheet, Text, View, SafeAreaView, Dimensions, Image} from "react-native"; 

export default function Home({navigation}){ 
    
    const pressHandler=()=>{
        navigation.navigate("Login");
        // console.log("hola")
    }
   
    return(
        <SafeAreaView style={styles.container}> 

        <View style={styles.circuloGrande}></View>
				  <View style={styles.circuloPequeño}></View>

          <View style={styles.logo}>
            <Image 
              source={require('../assets/logo.png')}
              style={{width:180,height:180}}
            />
          </View>
          <View style={styles.central}>

            <Text style={styles.title}>
                  E40 Autolavado
            </Text>
            <Text style={styles.inicio} onPress={pressHandler}>
                  Iniciar   
                       
            </Text>
            
          </View>
 
       </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor:"#66C3FE"
    },
  
    title:{
      fontFamily: 'Roboto',
      textAlign:"center",
      paddingHorizontal:30,
      fontSize:40, 
      color:'#003366'
    },     
  
    logo:{
      marginHorizontal:80,
      marginBottom:20,
    },
    inicio:{
      marginTop:0,
      justifyContent: 'center',
      alignItems: 'center', 
      textAlign: 'center',
      fontSize:20,
      color:'#003366'
    },

    circuloGrande: {
      width: Dimensions.get('window').height * 0.7,
      height: Dimensions.get('window').height * 0.7,
      backgroundColor: '#49A5FC',
      borderRadius: 1000,
      position: 'absolute',
      right: Dimensions.get('window').width * 0.25,
      top: -50,
    },
    circuloPequeño: {
      width: Dimensions.get('window').height * 0.4,
      height: Dimensions.get('window').height * 0.4,
      backgroundColor: '#55B1FC',
      borderRadius: 1000,
      position: 'absolute',
      right: Dimensions.get('window').width * -0.2,
      bottom: Dimensions.get('window').width * -0.3,
    },
  
  });
  