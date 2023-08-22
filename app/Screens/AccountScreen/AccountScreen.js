import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/logo.png';
import menz from '../../assets/menz.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const AccountScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [emailAddress, setEmailAdress] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onEdit = () =>{
        navigation.navigate('EditScreen');
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
        
      <View style={styles.homeneeds}>
        <View style={styles.homebannerc}>
        <Image source={menz} resizeMode={('cover','contain', 'stretch')}/>
        </View>
      </View>
      <View style={styles.homebannerlebo}>
      <Text>
        <Text style={styles.Titlehome}>Name: </Text>  
        <Text style={styles.homenew}> Mensah Yaw</Text>
        </Text>
      
        <Text>
        <Text style={styles.Titlehome}>Gender: </Text>  
        <Text style={styles.homenew}>Male</Text>
        </Text>
        <Text>
        <Text style={styles.Titlehome}>Tel Number: </Text>  
        <Text style={styles.homenew}>07064982515</Text>
        </Text>
        <Text>
        <Text style={styles.Titlehome}>Role: </Text>  
        <Text style={styles.homenew}>Admin</Text>
        </Text>
        <Text>
        <Text style={styles.Titlehome}>Email: </Text>  
        <Text style={styles.homenew}>mensahy@babcock.edu.ng</Text>
        </Text>
        <Text>
        <Text style={styles.Titlehome}>Password </Text>  
        <Text style={styles.homenew}>**********</Text>
        </Text>
       
       </View>
        
       <CustomButton texts="Edit Account Details" 
        onPress={onEdit}
        />
      
    </View>

</ScrollView>

    </ImageBackground>

   
  ); 
}; 

export default AccountScreen