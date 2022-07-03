import { ScrollView, View, Text, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import {useIsFocused} from '@react-navigation/native';
import { Logo2, JSONCarList, JSONCategoryList, } from '../../assets'
import {ButtonIcon, List} from '../../components'
import { colors } from '../../utils';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainBody}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.background2 : null} />
      <View style={styles.profileWrapper}>
        <View style={styles.bungkus}>
          <Text style={styles.text1}>Hi, Galang</Text>
          <Text style={styles.text2}>Your Location</Text>
        </View>
        <Image source={Logo2} style={styles.imageProfile}></Image>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <ImageBackground resizeMode='cover' source={Logo2} style={styles.logo}> 
              <Text style={styles.text3}>Sewa Mobil Berkualitas</Text>
              <Text style={styles.text4}>di kawasanmu</Text>
              <Text style={styles.text5}>Sewa Mobil</Text>
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
    fontFamily: 'Helvetica',
    paddingLeft: 16,
    paddingTop: 16,  
  },
  text2 : {
    color: '#000',
    fontFamily: 'Helvetica',
    paddingLeft: "5%",
    fontWeight: 'bold',
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
    width: '90%',
    height: '45%',
    backgroundColor: 'green',
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
  },
  logo: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
  },
  text3 : {
    fontFamily: 'Helvetica',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  text4 : {
    fontFamily: 'Helvetica',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  text5 : {
    color: '#fff',
    fontFamily: 'Helvetica',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16,
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