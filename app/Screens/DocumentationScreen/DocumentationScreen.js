import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/logo.png';
import getb from '../../assets/get.png';
import Co2 from '../../assets/co2.png';
import abu from '../../assets/abu.png';
import doc from '../../assets/doc.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const DocumentationScreen = () => {

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
    <ImageBackground style={styles.bg} source={require("../../assets/backgroud2.png")} >
   
   <View style={styles. newcontainer}>
        <Image source={Logo} style={[styles.createlogo, {height: height * 0.15}]} resizeMode='contain'
        />
        <ScrollView>
        <Text style={styles.Titlehome}>Welcome...</Text>
        <Text style={styles.homenew}>Mensah Yaw</Text>
        <View style={styles.homeneed}>
        <View style={styles.homebannerb}>
        <Image source={doc}  resizeMode={('cover','contain', 'stretch')} />
        </View>
        </View>

        <Text style={styles.TitleAbout}>About the System</Text>
        <Text style={styles.Titlehome}> The proposed Cyber-Physical System 
        Based Waste Management and Conversion System,
         showing all its components and how they are
          interrelated. The proposed architecture is 
          designed as a Hybrid architecture that 
          comprises carbon dioxide emission measuring system, 
           paper waste management system, 
           waste collection vehicles, paper waste separation 
           center, and paper waste conversion system.</Text>
        
           <Image source={abu} resizeMode={('cover','contain', 'stretch')} />
           </ScrollView>
      </View>



    </ImageBackground>

   
  ); 
}; 

export default DocumentationScreen