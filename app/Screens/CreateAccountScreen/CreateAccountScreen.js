import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/logo.png';
import styles from '../../Screens/style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const CreateAccountScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [emailAddress, setEmailAdress] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
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
   
    <ImageBackground style={styles.bg} source={require("../../assets/backg.png")} >
 <View style={styles. container}> 
    <Image source={Logo} style={[styles.createlogo, {height: height * 0.28}]} resizeMode='contain'
        />
    <Text style={styles.loginTitle}>Create Account</Text>
</View>
   <ScrollView>
    <View style={styles. container}>
        

       <CustomInput 
        placeholder="Full Name" 
        value={fullname} 
        setValue={setFullname}
        showname={true}
        iconName={'person'}  
        />

        <CustomInput 
        placeholder="Email Address" 
        value={emailAddress} 
        setValue={setEmailAdress}  
        showname={true}
        iconName={'mail'} 
        />
        <CustomInput 
        placeholder="Phone Number" 
        value={phoneNumber} 
        setValue={setPhoneNumber}
        showname={true}
        iconName={'phone-portrait-sharp'}   
        />

        <CustomInput 
        placeholder="Gender" 
        value={gender} 
        setValue={setGender} 
        showname={true}
        iconName={'person-add'}   
        />
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
        iconName={'lock-closed'} 
        />
        <CustomInput  
        placeholder="Comfram Password" 
        value={cpassword} 
        setValue={setCpassword}
        secureTextEntry
        showname={true}
        iconName={'lock-closed-outline'} 
        />

        <CustomButton texts="Create An Account" 
        onPress={onSignup}
        />
        <Text style={styles.texts}>By registerung, you confime that you accept our  
        <Text style={styles.link}  onPress={onTermsofusePressed}> Terms of Use </Text>  
        and <Text style={styles.link} onPress={PrivacyPolicy}> Privacy Policy</Text>
        </Text>

        <CustomButton 
        texts="Sign In" 
         onPress={onSignInPressed}
         bgColor="#FAE9EA"
         fgColor="#DD4D44"
         />
          </View>
    </ScrollView>

       
        
   
    </ImageBackground>

   
  ); 
}; 

export default CreateAccountScreen