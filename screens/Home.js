import React from "react";
import { useState } from "react";
import {StyleSheet, Text, View,SafeAreaView,Button ,Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Home({navigation}){
    const[name,setName]=useState('No Name')
    
    const pressHandler=()=>{
        // navigation.navigate("TipoCarro");
        console.log("hola")
    }
    const Separator=()=>(
        <View style={styles.separator}/>
      );
    return(
        // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image 
              source={require('../assets/logo.png')}
              style={{width:150,height:140}}
            />
          </View>
          <View style={styles.central}>

            <Text style={styles.title}>
                App E40 Autolavado

            </Text>
            <Separator />
            <TextInput style={styles.input}
            // coge el nombre y lo guarda arriba en la constante
              placeholder=" Ingresa tu nombre"
              onChangeText={(val)=>setName(val)}
            
            />
            <Button style={styles.styleButton}
            title="Iniciar"
            textAlign="center"
            onPress={()=>pressHandler}
            />
          </View>
        </View>
      // {/* </SafeAreaView> */}
    );

}
const styles = StyleSheet.create({
    central:{
      marginTop:40
    },  
    input:{
      borderWidth:2,
      borderColor:"#0000FF",
      marginHorizontal:80,
      marginVertical:20,
      width:200,
      height:40

    },
    container: {
      flexDirection:"column",
      justifyContent: "center",
      
    },
    title:{
      textAlign:"center",
      paddingHorizontal:30,
      fontSize:40,
      fontStyle:"italic"
    },
    Separator:{
      marginVertical:20,
      borderBottomColor:'#737373'
    },
    styleButton:{
      margin:10,
    },
    logo:{
      marginHorizontal:110,
      marginTop:60,

    },

  
  });
  