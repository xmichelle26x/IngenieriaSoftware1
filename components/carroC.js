import React from 'react';
import {StyleSheet, Text, View ,Image,FlatList } from "react-native";

export default function CarroComponent( {navigation}){
    const[rutaImagenes,setRutaImagenes]=useState([
{title:"Auto",path:"../assets/auto.jpg"},
// {title:"Camioneta",path:"../assets/camioneta.jpg"},
// {title:"Cabezal de Trailer",path:"../assets/cabezal.jpg"},

    ]);

    return(
        <View>
            {/* <Text style={styles.texto}>
                Auto
            </Text>
            <Image
                style={styles.imagen}
                source={require('../assets/auto.jpg')}
            /> */}
            {/* <FlatList
                data={rutaImagenes}
                renderItem={({item}) => (
                    navigation.navigate("TipoCarroS1",item)
                )}
            
            
            /> */}
            
        </View>
    )
}
    // const styles = StyleSheet.create({
    //     imagen:{
    //         width:100,
    //         height:90,
    //     }
    // });
