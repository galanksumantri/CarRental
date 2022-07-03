import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

export default function Bar ({bgColor}) {
  return (
    <StatusBar
      barStyle="dark-content"
      backgroundColor={useIsFocused() ? {bgColor} : null} />
  );
};
