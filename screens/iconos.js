import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem({item }) {
  return (
    <View style={styles.item}>
    <AntDesign name="plussquare" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginTop: 5,
    borderColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
  },
});