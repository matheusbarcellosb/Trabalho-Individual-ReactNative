import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { AntDesign } from '@expo/vector-icons'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text> <AntDesign name="home" size={24} color="black" /></Text>
    </View>
  )
}

