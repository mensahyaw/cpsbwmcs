import { View, Text,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo,AntDesign } from '@expo/vector-icons'; 

import WasteChatScreen from '../Screens/WasteChatScreen/WasteChatScreen';
import WasteScreen from '../Screens/WasteScreen/WasteScreen';


import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuScreen from '../Screens/MenuScreen/MenuScreen';




const Tab = createBottomTabNavigator();

const Wastetabs = () => {
 
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
    name="All Waste Bin"
    component={WasteScreen}
    options={{ tabBarIcon:({size,color}) =>( <Entypo name="trash" size={30} color={color}/>)
    }}
    />
    
    <Tab.Screen 
    name="Waste Bin Chat"
    component={WasteChatScreen}
    options={{ tabBarIcon:({size,color}) =>(<Entypo name="bar-graph" size={30} color={color} />)
    }}
    
    />
 
 
    </Tab.Navigator>
  )
}

export default Wastetabs