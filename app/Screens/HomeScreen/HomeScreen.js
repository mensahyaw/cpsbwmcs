import { View, Text , Pressable, Image, useWindowDimensions, ScrollView, ImageBackground} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Logo from '../../assets/logo.png';
import getb from '../../assets/get.png';
import Co2 from '../../assets/co2.png';
import Conv from '../../assets/conv.png';
import doc from '../../assets/doc.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import CabonScreen from '../CabonScreen/CabonScreen';

const HomeScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [emailAddress, setEmailAdress] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

   const component= "HomeScreen";

   const Tab = createBottomTabNavigator();
    const onTab = () =>{
      navigation.navigate('Cabtabs');
  }

    const onWastePressed = () =>{
        navigation.navigate("Wastetabs");
    }
    
    const onconverstionPressed = () =>{
        navigation.navigate("ConversionScreen");
    }
   
  return (
    <ImageBackground style={styles.bg} source={require("../../assets/backgroud2.png")} >
   <ScrollView>
   <View style={styles. newcontainer}>
        <Image source={Logo} style={[styles.createlogo, {height: height * 0.15}]} resizeMode='contain'
        />
        <Text style={styles.Titlehome}>Welcome...</Text>
        <Text style={styles.homenew}>Mensah Yaw</Text>
        <View style={styles.homeneed}>
        <View style={styles.homebanner}>
        </View>
        </View>
     
        <Text style={styles.Thome}>Features</Text>
        <View style={styles.cps}>
        <View style={styles.cpsai} onPress={onTab}>
          <Pressable style={styles.cpsa}  onPress={onTab}>
           <Image source={Co2} onPress={onTab} resizeMode='contain'/>
          </Pressable>
          <Text style={styles.mycpsbutton} onPress={onTab}>C02 Emision System</Text>
        </View>

          <View style={styles.cpsai}>
          <Pressable style={styles.cpsb} onPress={onWastePressed}>
          <Image source={getb} onPress={onWastePressed} resizeMode='contain'/></Pressable>
          <Text style={styles.mycpsbutton} onPress={onWastePressed}>Waste Management System</Text>
          </View>

          <View style={styles.cpsai}>
          <Pressable style={styles.cpsc} onPress={onconverstionPressed}>
          <Image source={Conv} onPress={onconverstionPressed} resizeMode='contain'/></Pressable>
          <Text style={styles.mycpsbutton} onPress={onconverstionPressed}>Waste Converstion System</Text>
          </View>
        </View>

        <Text style={styles.Thome}>Documentation</Text>
        <View style={styles.homeneed}>
        <View style={styles.homebannerb}>
        <Image source={doc}  resizeMode={('cover','contain', 'stretch')} />
        </View>
        </View>
      </View>

</ScrollView>



    </ImageBackground>

   
  ); 
}; 

export default HomeScreen