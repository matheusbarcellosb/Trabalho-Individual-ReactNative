import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Routes/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})

