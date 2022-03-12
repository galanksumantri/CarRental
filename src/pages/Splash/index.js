import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout( () => {
      navigation.replace('MainApp')
    }, 2500)
  }, [navigation])

  return (
    <View style={styles.backround}>
      <View style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.text}>BCR</Text>
          <Text style={styles.text}>Binar Car Rental</Text>
        </View>
      </View>
      <Image source={Logo} style={styles.logo} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  backround: {
    backgroundColor: '#091B6F',
    flex: 1
  },
  logo: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'stretch',
    width: '100%'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Helvetica' 
  },
  content: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  container: {
    paddingBottom: '30%'
  }
})