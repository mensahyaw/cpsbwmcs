import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground, Pressable} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/logo.png';
import getb from '../../assets/get.png';
import Co2 from '../../assets/co2.png';
import Conv from '../../assets/conv.png';
import doc from '../../assets/doc.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const ConversionScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [emailAddress, setEmailAdress] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onhome = () =>{
        navigation.navigate('Tab');
    }
    const onSignup = () =>{
        navigation.navigate('ConfirmEmailScreen');
    }

    const onTermsofusePressed = () =>{
        console.warn("Terms of Use");
    }

    const PrivacyPolicy= () =>{
        console.warn("Privacy Policy");
    }
  return (
    <ImageBackground style={styles.bg} source={require("../../assets/backgroud2.png")} >
   <ScrollView>
   <View style={styles. newcontainer}>
        <Image source={Logo} style={[styles.createlogo, {height: height * 0.15}]} resizeMode='contain'
        />
        
     
        

        
        <View style={styles.homeneed}>
        
        </View>
      </View>

</ScrollView>

<View style={styles.abc}>
<Pressable style={styles.foot} onPress={onhome}>
  <Ionicons name="home" onPress={onhome} style={styles.footIcon} size={30} color="black" />
  </Pressable> 
</View> 
    </ImageBackground>

   
  ); 
}; 

export default ConversionScreen