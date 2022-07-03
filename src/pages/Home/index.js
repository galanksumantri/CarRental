import { ScrollView, View, Text, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import {useIsFocused} from '@react-navigation/native';
import { Profile, Logo2, JSONCarList, JSONCategoryList, } from '../../assets'
import {ButtonIcon, List, Button} from '../../components'
import { colors, fonts } from '../../utils';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainBody}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.background2 : null} />
      <View style={styles.profileWrapper}>
        <View style={styles.bungkus}>
          <Text style={styles.text1}>Hi, Galang Sumantri</Text>
          <Text style={styles.text2}>Kulon Progo, DI Yogyakarta</Text>
        </View>
        <Image source={Profile} style={styles.imageProfile}></Image>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <ImageBackground resizeMode='cover' source={Logo2} style={styles.logo}> 
            <Text style={styles.text3}>Sewa Mobil Berkualitas</Text>
            <Text style={styles.text3}>di kawasanmu</Text>
            <Button title="Sewa Mobil" style={{width: 109, height: 28, marginLeft: '5%', marginTop: 16}} />
          </ImageBackground>
        </View>
      </View>
      <View style={styles.body}>
          <View style={styles.iconLayanan}>
            {JSONCategoryList.data.map(item => {
              return (
                <View key={item.id}>
                  <ButtonIcon title={item.title} />
                </View>
              );
            })}
          </View>
          <View>
            <Text style={styles.titleLayananDaftarMobil}>
              Daftar Mobil Pilihan
            </Text>
            {JSONCarList.data.map(item => {
              return (
                <View key={item.id}>
                  <List
                    name={item.name}
                    briefCase={item.briefCase}
                    user={item.user}
                    harga={item.harga}
                  />
                </View>
              );
            })}
          </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainBody : {
    backgroundColor: colors.white,
  },
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
    backgroundColor: 'green',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  logo: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
  },
  text3 : {
    fontFamily: fonts.primary[400],
    paddingLeft: "5%",
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
  body: {
    marginHorizontal: 16,
  },
  iconLayanan: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
  },  
  titleLayananDaftarMobil: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: colors.text.primary,
    fontWeight: '700',
    paddingBottom: 16,
    marginTop: 24,
  },
})