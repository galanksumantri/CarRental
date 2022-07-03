import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {useIsFocused} from '@react-navigation/native';
import { Profile, Logo2, JSONCarList, JSONCategoryList, } from '../../assets'
import {ButtonIcon, List, HeaderHome, Banner} from '../../components'
import { colors } from '../../utils';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainBody}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.background2 : null} />
      <HeaderHome
        name="Galang Sumantri"
        address="Kulon Progo, DI Yogyakarta"
        source={Profile}/>
      <Banner 
       text1="Sewa Mobil Berkualitas"
       text2="di Kawasanmu"
       source={Logo2} />
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