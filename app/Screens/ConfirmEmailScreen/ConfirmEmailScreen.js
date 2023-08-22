import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';


import Logo from '../../assets/logo.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');



    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onResendCode = () =>{
        console.warn("Code resent to your Email");
    }
    const onConfirm = () =>{
        navigation.navigate('HomeScreen');
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
        <Text style={styles.loginTitle}>Confarm Your Email Account</Text>
       <CustomInput 
        placeholder="Enter Your Confirmation Code" 
        value={code} 
        setValue={setCode}  
        />

        <CustomButton texts="Confirm" 
        onPress={onConfirm}
    
        />
        <CustomButton 
        texts="Resend Code" 
         onPress={onResendCode}
         bgColor="#FAE9EA"
        fgColor="#DD4D44"
         />
        <CustomButton 
        texts="Back To Sign in" 
         onPress={onBackSignin}
         bgColor="#e3e3e3"
        fgColor="#363636"
         /> 

        </View>
        </ScrollView>
   
    </ImageBackground>

   
  ); 
}; 

export default ConfirmEmailScreen