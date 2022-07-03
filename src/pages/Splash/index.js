import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'
import {colors, fonts} from '../../utils'

export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout( () => {
      navigation.replace('MainApp')
    }, 2500)
  }, [navigation])

  return (
    <View style={styles.backround}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background} />
      <View style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.text}>BCR</Text>
          <Text style={styles.text}>Binar Car Rental</Text>
        </View>
      </View>
      <Image resizeMode='cover' source={Logo} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  backround: {
    backgroundColor: colors.background,
    flex: 1
  },
  logo: {
    width: '100%', 
    height: 200,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.primary[400],
    fontWeight: '700',
  },
  content: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  container: {
    paddingBottom: '50%'
  }
})