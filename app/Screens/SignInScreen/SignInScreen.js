import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Logo from '../../assets/logo.png';
import styles from '../../Screens/style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const Tab = createBottomTabNavigator();


    const onSignInPressed = () =>{
        navigation.navigate("Tab");
    }

    const onFogotPassword = () =>{
    navigation.navigate('ForgotPassword');
    }

    const onSignInGoogle = () =>{
        console.warn("Sign In With Google");
    }

    const onSignInApple = () =>{
        console.warn("Sign In With Apple");
    }
    const onSignup = () =>{
        navigation.navigate('CreateAccount'); 
    }
  return (
    <ImageBackground style={styles.bg} source={require("../../assets/backg.png")} >
   <ScrollView>
        <View style={styles. container}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.22}]} resizeMode='contain'
        />
        <Text style={styles.loginTitle}>Login Page</Text>
        
        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername}
        showname={true}
        iconName={'person'}  
        />
        <CustomInput  
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry
        showname={true}
        iconName={'eye-off'} 
        />

<Text style={styles.pass} onPress={onFogotPassword}> Forgot Password ?</Text>

        <CustomButton 
        texts="Sign In" 
         onPress={onSignInPressed}/>



        <Text style={styles.texts}>Don't have an account? <Text style={styles.link} onPress={onSignup}> Create An Account</Text>
        </Text>
        <Text style={styles.loginTitle}> ----- Or continue with ----- </Text>
             
        <CustomButton 
        texts="Sign In With Google" 
        onPress={onSignInGoogle}
        bgColor="#e3e3e3"
        fgColor="#363636"
        showIcon={true}
        iconName={'logo-google'}
         />

        <CustomButton 
        texts="Sign In With Apple" 
         onPress={onSignInApple}
         bgColor="#e3e3e3"
        fgColor="#363636"
        showIcon={true}
        iconName={'logo-apple'}
         />
         

        </View>
        </ScrollView>
</ImageBackground>
   
  ); 
}; 

export default SignInScreen