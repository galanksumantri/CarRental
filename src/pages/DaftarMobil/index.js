import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {JSONCarList, Mercedes} from '../../assets';
import {List, HeaderTitle} from '../../components';
import {colors} from '../../utils';

export default function DaftarMobil() {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={useIsFocused() ? colors.white : null} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitle title="Daftar Mobil" />
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

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  bodyWrapper: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
