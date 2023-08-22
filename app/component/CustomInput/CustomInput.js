import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from '../../Screens/style';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, showname, iconName}) => {
  return (
    <View style={styles. StyleForm}>
      <TextInput  
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
       style={styles.Textinput}
    secureTextEntry={secureTextEntry}
       />
      {showname ? <Ionicons style={styles.LeftIcon} name={iconName} size={24} color="black" /> : null}
    </View>
  )
}

export default CustomInput