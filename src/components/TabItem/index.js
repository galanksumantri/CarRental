import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { IconHome, IconHomeActive, IconList, IconListActive, IconUser, IconUserActive } from '../../assets';
import {colors, fonts} from '../../utils';
 
export default function TabItem({isFocused, onPress, label}) {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === 'Daftar Mobil')
      return isFocused ? <IconListActive /> : <IconList />;
    if (label === 'Akun') return isFocused ? <IconUserActive /> : <IconUser />;
    return <IconHomeActive />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 10,
    color: isFocused ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[400],
    marginTop: 3,
  }),
});
