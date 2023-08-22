import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground, Pressable, Animated, TextInput,StyleSheet} from 'react-native';
import React, { useRef } from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Svg,{G, Circle} from 'react-native-svg';


import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/logo.png';
import getb from '../../assets/get.png';
import Co2 from '../../assets/co2.png';
import Conv from '../../assets/conv.png';
import doc from '../../assets/doc.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';


const MainWasteScreen = ({
  percentage =70,
  radius = 130,
  strokWidth = 10,
  duration = 500,
  color ='green',
  delay =2000,
  textColor, 
  max =100,
}) => {

const animatedValue = React.useRef(new Animated.Value (0)).current;
const circleRef = React.useRef();
const inputRef = React.useRef();
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)
 
const halfcircle = radius + strokWidth;
const circleCircumference =   2 * Math.PI * radius;
  
const animation = (toValue) =>{
  return Animated.timing(animatedValue,{
   toValue,
   duration,
   delay,
   useNativeDriver: true,
  }).start(() =>{

    //animation(toValue === 0 ? percentage : 0);
  });
   
};

  React.useEffect  (() =>{ 
  animation(percentage);
   
       
   animatedValue.addListener (v =>{
    if(circleRef?.current){
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset = 
        circleCircumference -(circleCircumference * maxPerc) / 100;  
      circleRef.current.setNativeProps({
        strokeDashoffset,
      });
    }
    if(inputRef?.current){
      inputRef.current.setNativeProps({
        text:`${Math.round(v.value)}`,
      });
    }
   });
   return () => {
    animatedValue.removeAllListeners();
   }
  }, [max, percentage]);   


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
  </View>


  <View style={styles.containerb}>
    <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfcircle * 2} ${halfcircle * 2}`}>
      <G rotation='-90' origin={`${halfcircle}, ${halfcircle}`}>
        <Circle 
        cx='50%'
        cy='50%'
        stroke={color}
        strokeWidth={strokWidth}
        r={radius}
        fill='transparent'
        strokeOpacity={0.2}
        
        />
        <AnimatedCircle
        ref={circleRef}
        cx='50%'
        cy='50%'
        stroke={color}
        strokeWidth={strokWidth}
        r={radius}
        fill='transparent'
        strokeDasharray={circleCircumference}
        strokeDashoffset={circleCircumference}
        strokeLinecap='round'
        />
      </G>
    </Svg>
    <AnimatedInput
    ref={inputRef} 
      underlineColorAndroid='transparent'
      editable={false}
      defaultValue='0'
      style={[
        StyleSheet.absoluteFillObject,
        {fontSize: radius / 2, color: textColor ?? color},
        {fontWeight: '900', textAlign:'center', paddingBottom:'20%'},
      ]}
     
    />
     <Text style={styles.TitleAbout}>percentage Full</Text>
     <Text style={styles.Titlehome}>in Mensah Waste Bin</Text>
     <Image source={getb}  resizeMode='contain'/>

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

export default MainWasteScreen