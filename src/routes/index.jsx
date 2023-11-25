import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react'

import { Home } from '../pages/home'

import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { Network } from '../pages/network';
import Publication from '../pages/publication';
import Notificacoes from '../pages/notificaoes';
import Work from '../pages/work';

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
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
        component={Network}
        options={{
          tabBarLabel: 'Minha rede',
          tabBarIcon: () => (
            <Ionicons name="people-outline" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name='Publication'
        component={Publication}
        options={{
          tabBarLabel: 'Publicação',
          tabBarIcon: () => (
            <Ionicons name="ios-add-circle-outline" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name='Notificações'
        component={Notificacoes}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => (
            <Ionicons name="ios-notifications-outline" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name='Work'
        component={Work}
        options={{
          tabBarLabel: 'Vagas',
          tabBarIcon: () => (
            <Entypo name="suitcase" size={24} color="black" />
          )
        }}
      /> 
    </Tab.Navigator>
  )
}
