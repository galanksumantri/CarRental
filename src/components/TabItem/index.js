import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcHome,
  IcHomeActive,
  IcList,
  IcListActive,
  IcUser,
  IcUserActive,
} from '../../assets';
import {colors, fonts} from '../../utils';

const TabItem = ({isFocused, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IcHomeActive /> : <IcHome />;
    if (label === 'Daftar Mobil')
      return isFocused ? <IcListActive /> : <IcList />;
    if (label === 'Akun') return isFocused ? <IcUserActive /> : <IcUser />;

    return <IcHomeActive />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <Icon /> */}
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

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
