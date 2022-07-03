import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Akun, DaftarMobil, Splash } from '../pages';
import { BottomNavigator } from '../components/';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function MainApp () {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{headerShown: false}} 
      />
      <Tab.Screen 
        name="Daftar Mobil" 
        component={DaftarMobil} 
        options={{headerShown: false}}
      />
      <Tab.Screen 
        name="Akun" 
        component={Akun} 
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  )
}

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen 
        name='Splash' 
        component={Splash} 
        options={{ headerShown: false }} />
      <Stack.Screen 
        name='MainApp' 
        component={MainApp} 
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
