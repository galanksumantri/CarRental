import { StyleSheet, View } from 'react-native'
import React from 'react'
import TabItem from '../TabItem';
import { colors } from '../../utils';

export default function BottomNavigator({ state, descriptors, navigation }) {
    return (
      <View style={ styles.container }>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          return (
            <TabItem 
                key={index}
                label={label}
                isFocused={isFocused}
                onPress={onPress}
            />
          );
        })}
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'space-around',
        paddingHorizontal: 8,
        paddingVertical: 11,
        borderTopWidth: 1,
        borderColor: colors.border,
    }
})