import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcOlehOleh, IcPenginapan, IcSewaMobil, IcWisata} from '../../assets';
import {colors, fonts} from '../../utils';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Sewa Mobil') return <IcSewaMobil />;
    if (title === 'Oleh-Oleh') return <IcOlehOleh />;
    if (title === 'Penginapan') return <IcPenginapan />;
    if (title === 'Wisata') return <IcWisata />;

    return <IcSewaMobil />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.button.secondary,
    padding: 16,
    alignSelf: 'center',
    borderRadius: 8,
  },

  text: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginTop: 8,
  },
});
