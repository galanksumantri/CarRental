import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { Home, Akun, DaftarMobil, Splash } from '../pages';
import { BottomNavigator } from '../components/';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
        }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={24} color={focused ? '#0D28A6' : '#222222'} />
          ),
          headerShown: false
        }} 
      />
      <Tab.Screen 
        name="Daftar Mobil" 
        component={DaftarMobil} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="list" size={24} color={focused ? '#0D28A6' : '#222222'} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Akun" 
        component={Akun} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={24} color={focused ? '#0D28A6' : '#222222'} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})

// export default Router