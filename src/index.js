import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Axel, JSONCarList, JSONCategoryList, Mercedes} from '../../assets';
import {ButtonIcon, CarList, Header} from '../../components';
import {colors, colors2} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.background2 : null}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          name="Axel Berkati"
          location="Palangkaraya, Kalimantan Tengah"
          source={Axel}
        />
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
                  <CarList
                    name={item.name}
                    briefCase={item.briefCase}
                    user={item.user}
                    source={Mercedes} // Cara untuk mengambil foto dari JSON file, masih belum ketemu
                    harga={item.harga}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors2.white,
  },

  body: {
    marginTop: 100,
    marginHorizontal: 16,
  },

  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleLayananDaftarMobil: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: colors.text.primary,
    fontWeight: '700',
    paddingBottom: 16,
    marginTop: 24,
  },
});
