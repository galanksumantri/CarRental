import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBriefCase, IcUsers} from '../../assets';
import {colors, fonts} from '../../utils';
import { Car } from '../../assets';

export default function List({name, harga, user, briefCase}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={Car} style={styles.image} />
        <View>
          <Text style={styles.mobil}>{name}</Text>
          <View style={styles.icon}>
            <IcUsers style={{marginRight: 4}} />
            <Text style={styles.text}>{user}</Text>
            <IcBriefCase style={{marginRight: 4}} />
            <Text style={styles.text}>{briefCase}</Text>
          </View>
          <Text style={styles.harga}>{harga}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.border,
    marginBottom: 16,
  },
  wrapper: {
    flexDirection: 'row',
  },
  mobil: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    marginBottom: 4,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  harga: {
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    fontSize: 14,
    marginTop: 8,
  },
  image: {
    marginVertical: 8,
    marginRight: 16,
  },
  text: {
    marginRight: 16,
    fontSize: 13,
    fontFamily: fonts.primary[300],
  },
});
