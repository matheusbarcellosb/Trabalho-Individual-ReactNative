import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react'

import { Home } from '../pages/home'

import { Ionicons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => (
            <AntDesign name="home" size={20} color="black" />
          )
        }}
      />
      <Tab.Screen
        name='Network'
        component={Home}
      />
      <Tab.Screen
        name='Publication'
        component={Home}
      />
      <Tab.Screen
        name='Notification'
        component={Home}
      />
      <Tab.Screen
        name='Work'
        component={Home}
      /> 
    </Tab.Navigator>
  )
}
