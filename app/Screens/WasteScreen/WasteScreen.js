import { View, Text , Image, useWindowDimensions, ScrollView, ImageBackground, Pressable, FlatList} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';

import Logo from '../../assets/logo.png';
import getb from '../../assets/get.png';
import Co2 from '../../assets/co2.png';
import Conv from '../../assets/conv.png';
import doc from '../../assets/doc.png';
import styles from '../style';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';

const WasteScreen = () => {

    
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onhome = () =>{
      navigation.navigate('Tab');
  }
  const onpress = () =>{
      navigation.navigate('MainWasteScreen');
  }
  const Itemlist=[
    {id:1, name:'Mensah Waste Bin', image:require("../../assets/get.png") },
    {id:2, name:'BBS Waste Bin', image:require("../../assets/get.png") },
    {id:3, name:'EAH Waste Bin',image:require("../../assets/get.png")},
    {id:4, name:'BUTH Waste Bin', image:require("../../assets/get.png") },
    {id:5, name:'SAT Waste Bin', image:require("../../assets/get.png") },
    ];

 const list = ({item}) =>(
  <Pressable  style={styles.itemme} > 
  <Pressable style={styles.avaterContaners} onPress={onpress}>
  <Image  source={item.image} style={styles.avaimage} onPress={onpress}/>
  </Pressable>

<Text style={styles.listname} onPress={onpress}>{item.name}</Text>
<Text style={styles.listname} onPress={onpress}>{item.pass}</Text>
<FontAwesome name="eye" style={styles.listok} size={30} color="green" />
</Pressable>
  )
    
  HeaderComponent = () =>{
    return <Text style={styles.listheadme}>All Smart Waste Bin</Text>
  }
    
  itemSeparator = () =>{
    return <View style={styles.sep} />
  }

return (
  <ImageBackground style={styles.bg} source={require("../../assets/backgroud2.png")} >
    <View style={styles. newcontainer}>
      <Image source={Logo} style={[styles.createlogo, {height: height * 0.15}]} resizeMode='contain'
      />
    </View>
  
    <FlatList
    ListFooterComponentStyle={styles.listheader}
    ListHeaderComponent={HeaderComponent}
     data = { Itemlist }
     onPress={onpress}
    renderItem = {list}
    ItemSeparatorComponent={itemSeparator}
    ListEmptyComponent={<Text> No Record</Text>}
     />


<View style={styles.abc}>
<Pressable style={styles.foot} onPress={onhome}>
<Ionicons name="home" onPress={onhome} style={styles.footIcon} size={30} color="black" />
</Pressable> 
</View> 
  </ImageBackground>


   
  ); 
}; 

export default WasteScreen