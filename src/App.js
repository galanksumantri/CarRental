import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Feather';
import Router from './router';

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <Icon name="home" size={30} color="#900" />
//     </View>
//   );
// }

// function DaftarMobilScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function AkunScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Router />
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Feather name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen 
//           name="Home" 
//           component={HomeScreen}
//           options={{
//             tabBarIcon: () => (
//               <Icon name="home" size={30} color="#222222" />
//             )
//           }} 
//         />
//         <Tab.Screen 
//           name="Daftar Mobil" 
//           component={DaftarMobilScreen} 
//           options={{
//             tabBarIcon: () => (
//               <Icon name="list" size={30} color="#222222" />
//             )
//           }}
//         />
//         <Tab.Screen 
//           name="Akun" 
//           component={AkunScreen} 
//           options={{
//             tabBarIcon: () => (
//               <Icon name="user" size={30} color="#222222" />
//             )
//           }}  
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
