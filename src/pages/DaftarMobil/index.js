import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {JSONCarList, Mercedes} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const DaftarMobil = () => {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.white : null}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleWrapper}>
          <Text style={styles.textTitle}>Daftar Mobil</Text>
        </View>
        <View style={styles.bodyWrapper}>
          {JSONCarList.data.map(item => {
            return (
              <View key={item.id}>
                <List
                  name={item.name}
                  briefCase={item.briefCase}
                  user={item.user}
                  source={Mercedes}
                  harga={item.harga}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DaftarMobil;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },

  titleWrapper: {
    marginVertical: 18,
    marginHorizontal: 16,
  },

  textTitle: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
  },

  bodyWrapper: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
