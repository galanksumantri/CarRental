import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import {Logo} from '../../assets';
import {Button} from '../../components';
import {colors, fonts} from '../../utils';

function Akun () {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.white : null}
      />

      <View style={styles.titleWrapper}>
        <Text style={styles.titleLayanan}>Akun</Text>
      </View>
      <View style={styles.card}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.textTitle}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </Text>
        <Button title="Register" />
      </View>
    </View>
  );
};

export default Akun;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  titleWrapper: {
    marginVertical: 18,
    marginHorizontal: 16,
  },
  titleLayanan: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
  },

  card: {
    marginHorizontal: 24,
    alignItems: 'center',
    marginBottom: 110,
    marginTop: 84,
    width: windowWidth * 0.87,
    height: windowHeight * 0.47,
  },
  image: {
    width: windowWidth * 0.87,
    height: windowHeight * 0.3,
    marginBottom: 16,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
});
