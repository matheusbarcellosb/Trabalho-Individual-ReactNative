import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export const Network = () => {
  
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text>Pressione a quantidade de navegações feitas a essa pagina</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <Text>Vezes visitadas {count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  botao:{
    flex:1,
    margin:10,
    height:60,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    borderColor: 'black'
  }
})