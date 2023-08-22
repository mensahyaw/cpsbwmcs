import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/logob.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const WelcomepageScreen = () => {

   
    
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
    }

    
  return (
    <ImageBackground style={styles.bg} source={require("../../assets/backgn.png")} >
   <ScrollView>
        <View style={styles. container}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.2}]} resizeMode='contain'
        />
       <Image  style={[styles.logo, {height: height * 0.55}]} resizeMode='contain'
        />
        
        <CustomButton 
        texts="SignUp/SignIn" 
         onPress={onSignInPressed}
         bgColor="#e3e3e3"
        fgColor="#008e3a" 
         />


        </View>
        </ScrollView>
</ImageBackground>
   
  ); 
}; 

export default WelcomepageScreen