import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../utils';

export default function HeaderHome({name, address, source}) {
  return (
      <View style={styles.profileWrapper}>
        <View style={styles.bungkus}>
          <Text style={styles.text1}>Hi, {name}</Text>
          <Text style={styles.text2}>{address}</Text>
        </View>
        <Image source={source} style={styles.imageProfile}></Image>
      </View>
  )
}

const styles = StyleSheet.create({
  bungkus : {
    justifyContent: 'flex-start',
    height: 146,
  },
  text1 : {
    color: '#000',
    fontFamily: fonts.primary[300],
    fontWeight: '300',
    paddingLeft: 16,
    paddingTop: 16,  
  },
  text2 : {
    color: '#000',
    fontFamily: fonts.primary[700],
    paddingLeft: "5%",
    fontWeight: '700',
    fontSize: 16,
  },
  imageProfile: {
    marginTop: 25,
    height: 28,
    width: 28,
    borderRadius: 46 / 2,
  },
  profileWrapper: {
    backgroundColor: colors.background2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
});
