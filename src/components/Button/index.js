import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils';

const Button = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonWrapper}>
        <Text style={styles.textButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.button.primary,
    width: windowWidth * 0.225,
    height: windowHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  textButton: {
    color: colors.text.white,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Helvetica-Bold',
  },
});
