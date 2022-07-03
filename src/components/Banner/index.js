import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../Button'
import { colors, fonts } from '../../utils'

export default function Banner({source, text1, text2}) {
  return (
  <View style={styles.container}>
    <View style={styles.card}>
      <ImageBackground resizeMode='cover' source={source} style={styles.logo}> 
        <Text style={styles.text3}>{text1}</Text>
        <Text style={styles.text3}>{text2}</Text>
        <Button title="Sewa Mobil" style={styles.button} />
      </ImageBackground>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 16,
    width: 328,
    height: 140,
    borderRadius: 8,
    backgroundColor: colors.background,
    marginVertical: 74,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  logo: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
  },
  text3: {
    fontFamily: fonts.primary[400],
    paddingLeft: "5%",
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
  button: {
    width: 109, 
    height: 28, 
    marginLeft: '5%', 
    marginTop: 16
  }
})