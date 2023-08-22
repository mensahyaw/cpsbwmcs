import { View, Text , Pressable, Image, useWindowDimensions, ScrollView, ImageBackground,} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo,AntDesign } from '@expo/vector-icons';  

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

const MenuScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [emailAddress, setEmailAdress] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const Tab = createBottomTabNavigator();

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

   const component= "HomeScreen";
  
    const onCabonPressed = () =>{
      navigation.navigate('CabonScreen');
  }

    const onWastePressed = () =>{
        navigation.navigate("WasteScreen");
    }
    
    const onTabs = () =>{
        navigation.navigate("Tab");
    }
    const PrivacyPolicy= () =>{
        console.warn("Privacy Policy");
    }
  return (
    <ImageBackground style={styles.bg} source={require("../../assets/backgroud2.png")} >
   <View style={styles. newcontainer}>
        <Image source={Logo} style={[styles.createlogo, {height: height * 0.12}]} resizeMode='contain'
        />

<ScrollView>
      <View style={styles.cpss}>
       
        <Text style={styles.Thome}>Admin</Text>
        <View style={styles.cpsabb}>
         
          <Pressable style={styles.cpsme}  onPress={onTabs}>
          <Ionicons name="md-trash-bin-sharp" style={styles.mycpsimage} size={24}  />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Add Waste Bin</Text>
          </Pressable>
        
          <Pressable style={styles.cpsme} onPress={onWastePressed}>
          <Ionicons name="trash-bin" size={24} style={styles.mycpsimage}/>
          <Text style={styles.mycpsbuttons} onPress={onWastePressed}>Delete Waste Bin</Text>
          </Pressable>
          
        
          <Pressable style={styles.cpsme} onPress={onTabs}>
          <FontAwesome5 name="trash-restore" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Update Waste Bin</Text>
          </Pressable>
          
          

          <Pressable style={styles.cpsme} onPress={onTabs}>
          <Ionicons name="trash" size={24} style={styles.mycpsimage}/>
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View Waste Bin</Text>
          </Pressable>
        </View>

        <View style={styles.cpsabb}>
         
          <Pressable style={styles.cpsme}  onPress={onTabs}>
          <AntDesign name="cloudupload" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Add CO<Text style={styles.subscript}>2</Text> Device</Text>
          </Pressable>
        
          <Pressable style={styles.cpsme} onPress={onWastePressed}>
          <AntDesign name="clouddownload" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onWastePressed}>Delete CO<Text style={styles.subscript}>2</Text> Device</Text>
          </Pressable>
          
        
          <Pressable style={styles.cpsme} onPress={onTabs}>
          <Entypo name="thunder-cloud" size={24} color="black" style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Update CO<Text style={styles.subscript}>2</Text> Device</Text>
          </Pressable>
          
          

          <Pressable style={styles.cpsme} onPress={onTabs}>
          <AntDesign name="cloud" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View CO<Text style={styles.subscript}>2</Text> Device</Text>
          </Pressable>
        </View>
        <View style={styles.cpsabb}>
         
          <Pressable style={styles.cpsme}  onPress={onTabs}>
          <Entypo name="cycle" size={24}  style={styles.mycpsimage}/>
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Add Conversion Syatem</Text>
          </Pressable>
        
          <Pressable style={styles.cpsme} onPress={onWastePressed}>
          <Entypo name="cross" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onWastePressed}>Delete Conversion Syatem</Text>
          </Pressable>
          
        
          <Pressable style={styles.cpsme} onPress={onTabs}>
          <Entypo name="cw" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Update Conversion Syatem</Text>
          </Pressable>
          
          

          <Pressable style={styles.cpsme} onPress={onTabs}>
          <Entypo name="creative-commons-share" size={24} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View Conversion Syatem</Text>
          </Pressable>
         
        </View>

        <Text style={styles.Thome}>Cabon Dioxide System</Text>
        <View style={styles.cpsabb}>
         
          <Pressable style={styles.cpsmen}  onPress={onTabs}>
          <FontAwesome5 name="cloud-rain" size={40} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View All CO<Text style={styles.subscript}>2</Text> Device </Text>
          </Pressable>
        
          <Pressable style={styles.cpsmen} onPress={onTabs}>
          <AntDesign name="linechart" size={40} style={styles.mycpsimage}  />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View  CO<Text style={styles.subscript}>2</Text> Chat</Text>
          </Pressable>
        </View>

        <Text style={styles.Thome}>Waste Management System</Text>
        <View style={styles.cpsabb}>
         
        <Pressable style={styles.cpsmen}  onPress={onTabs}>
        <Entypo name="trash" size={40} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View AllWaste Bin</Text>
          </Pressable>
        
          <Pressable style={styles.cpsmen} onPress={onTabs}>
          <Entypo name="bar-graph" size={40} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>View Waste Bin Chat</Text>
          </Pressable>
        </View>
        <Text style={styles.Thome}>Waste Conversion System</Text>
        <View style={styles.cpsabb}>
         
         <Pressable style={styles.cpsmens}  onPress={onTabs}>
         <FontAwesome5 name="recycle" size={40} style={styles.mycpsimage} />
          <Text style={styles.mycpsbuttons} onPress={onTabs}>Conversion System</Text>
          </Pressable>
        </View>
        
      </View>
</ScrollView>

      </View>





    </ImageBackground>

   
  ); 
}; 

export default MenuScreen