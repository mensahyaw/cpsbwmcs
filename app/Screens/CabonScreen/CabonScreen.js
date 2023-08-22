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



const CabonScreen = () => {


  const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onhome = () =>{
        navigation.navigate('Tab');
    }
    const onpress = () =>{
        navigation.navigate('MainCabonScreen');
    }

    const Itemlist=[
      {id:1, name:'Mensah Emision Device', image:require("../../assets/co2.png"), },
      {id:2, name:'BBS Emision Device', image:require("../../assets/co2.png") },
      {id:3, name:'EAH Emision Device',image:require("../../assets/co2.png")},
      {id:4, name:'BUTH Emision Device', image:require("../../assets/co2.png") },
      {id:5, name:'SAT Emision Device', image:require("../../assets/co2.png") },
      ];

   const list = ({item}) =>(
    
    <Pressable  style={styles.itemme} > 
    <Pressable style={styles.avaterContaner} onPress={onpress}>
    <Image source={item.image} style={styles.avaimage} onPress={onpress}/>
    </Pressable>

  <Text style={styles.listname} onPress={onpress}>{item.name}</Text>
  <Text style={styles.listname} onPress={onpress}>{item.pass}</Text>
  <FontAwesome name="eye" style={styles.listok}  size={30} color="green" />
  </Pressable>
    )
      
    HeaderComponent = () =>{
      return <Text style={styles.listheadme}>All CO<Text style={styles.subscript}>2</Text> Emision Device</Text>
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

export default CabonScreen