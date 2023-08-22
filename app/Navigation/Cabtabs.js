import { View, Text,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo,AntDesign } from '@expo/vector-icons'; 

import CabonChatScreen from '../Screens/CabonChatScreen/CabonChatScreen';
import CabonScreen from '../Screens/CabonScreen/CabonScreen';


import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuScreen from '../Screens/MenuScreen/MenuScreen';




const Tab = createBottomTabNavigator();

const Cabtabs = () => {
 
  return (
    <Tab.Navigator initialRoutName="Home" screenOptions={{headerShown: false, 
    tabBarActiveTintColor: "#dcb13b",
    tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#007b42",
        tabBarInactiveBackgroundColor: "#007b42",
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle:{
          fontSize: 12,
          fontWeight:'bold',
        },
    tabBarStyle:{
      backgroundColor:"#007b42",
      height:70,
      paddingBottom:10,
    }}}
    
 
    >
    <Tab.Screen 
    name="All CO2 Device"
    component={CabonScreen}
    options={{ tabBarIcon:({size,color}) =>( <FontAwesome5 name="cloud-rain" size={30} color={color} />)
    }}
    
    
    />
    <Tab.Screen 
    name="CO2 Chat"
    component={CabonChatScreen}
    options={{ tabBarIcon:({size,color}) =>(<AntDesign name="linechart" size={30} color={color} />)
    }}
    
    />
 
 
    </Tab.Navigator>
  )
}

export default Cabtabs