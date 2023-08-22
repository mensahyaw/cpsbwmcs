import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/logo.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const ConfirmPasswordScreen = () => {

    const [resetpassword, setResetpassword] = useState('');
    const [password, setPassword] = useState('');



    const {height} = useWindowDimensions();
    const navigation = useNavigation();
  
    const onSend = () =>{
        console.warn("Verification code sent to your Email");
        navigation.navigate('NewPasswordScreen');
    }

    const onBackSignin = () =>{
      navigation.navigate('SignIn');
    }

   
  return (
    <ImageBackground style={styles.bg} source={require("../../assets/backg.png")} >
    <ScrollView>
        <View style={styles. container}>
        <Image source={Logo} style={[styles.createlogo, {height: height * 0.28}]} resizeMode='contain'
        />
        <Text style={styles.loginTitle}>Reset Your Password *</Text>
       <CustomInput 
        placeholder="Enter Your Email Address" 
        value={resetpassword} 
        setValue={setResetpassword}  
        />

        <CustomButton texts="Send" 
        onPress={onSend}
    
        />
        
        <CustomButton 
        texts="Back To Sign in" 
         onPress={onBackSignin}
         bgColor="#FAE9EA"
        fgColor="#DD4D44"
         /> 

        </View>
        </ScrollView>
   
    </ImageBackground>

   
  ); 
}; 

export default ConfirmPasswordScreen