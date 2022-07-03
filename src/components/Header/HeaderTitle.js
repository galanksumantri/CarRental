import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

export default function HeaderTitle({title}) {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>   
    </View>
  )
}

const styles = StyleSheet.create({
  titleWrapper: {
    marginVertical: 18,
    marginHorizontal: 16,
  },
  textTitle: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
    fontWeight: '700'
  },
});
