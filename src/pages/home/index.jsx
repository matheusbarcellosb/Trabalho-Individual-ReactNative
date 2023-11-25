import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { Header } from '../../components/header'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  )
}

