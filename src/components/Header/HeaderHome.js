import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {HeaderBackground, IcBg, MercedesBanner} from '../../assets';
import {colors, fonts} from '../../utils';
import Button from '../Button';

export default function HeaderHome({name, location, source}) {
  return (
    <View>
      <ImageBackground source={HeaderBackground} style={styles.header}>
        <View style={styles.profileWrapper}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
          <Image source={source} style={styles.imageProfile}></Image>
        </View>
        {/* <Image source={Banner} style={styles.image} /> */}
        <View style={styles.backgroundBanner}>
          <Text style={styles.titleBanner}>
            Sewa Mobil Berkualitas di Kawasanmu
          </Text>
          <Button title="Sewa Mobil" />
          <View style={styles.mobilBanner}>
            <IcBg />
            <MercedesBanner
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.22,
    paddingHorizontal: 16,
  },

  name: {
    fontSize: 12,
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
  },

  location: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
  },

  // image: {
  //   width: windowWidth * 0.95,
  //   height: windowHeight * 0.2,
  //   alignSelf: 'center',
  //   borderRadius: 8,
  // },

  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
  },

  imageProfile: {
    height: windowHeight * 0.045,
    width: windowWidth * 0.077,
    borderRadius: 46 / 2,
  },

  backgroundBanner: {
    backgroundColor: colors.background,
    borderRadius: 8,
    width: windowWidth * 0.92,
    height: windowHeight * 0.22,
    padding: 24,
    alignSelf: 'center',
  },

  mobilBanner: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  titleBanner: {
    fontFamily: fonts.primary[400],
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 170,
    marginBottom: 16,
  },
});
