import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CarroComponent from "../components/carroC";

 export default function TipoCarroS1(){

     return(
         <View style={styles.container}>
             <View stye={styles.header}>
                <Text style={styles.title}>
                    Escoge el tipo de Carro
                </Text>
             </View>
        <View style={styles.body}>  
            <Text>
                Auto
            </Text>
            <CarroComponent/> 
            {/* la imagen del carro en un componente */}


        </View>
            


         </View>
     )
 }
 const styles=StyleSheet.create({

    header:{
        height:15,
        paddingTop:10,
        backgroundColor:"coral",
    },

 });
