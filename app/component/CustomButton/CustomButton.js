import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from '../../Screens/style';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomButton = ({onPress, texts, type = "PRIMARY", bgColor, fgColor, showIcon, iconName}) => {
  return (
    <Pressable onPress={onPress}
     style={[styles.StyleButton, 
     styles[`StyleButton_${type}`],
     bgColor ? {backgroundColor: bgColor} : {},
     ]}>
      <Text style={[styles.ButtonText, 
      styles[`ButtonText_${type}`],
      fgColor ? {color: fgColor} : {},
      ]}>{texts}</Text>
      {showIcon ? <Ionicons style={styles.RightIcon} name={iconName} size={24} color="black" /> : null}
    </Pressable>
  )
}

export default CustomButton