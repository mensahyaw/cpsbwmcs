import { View, Text,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

import DocumentationScreen from '../Screens/DocumentationScreen/DocumentationScreen';
import AccountScreen from '../Screens/AccountScreen/AccountScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CabonScreen from '../Screens/CabonScreen/CabonScreen';
import WasteScreen from '../Screens/WasteScreen/WasteScreen'; 
import ConversionScreen from '../Screens/ConversionScreen/ConversionScreen';
import Otherlink from './Otherlink';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuScreen from '../Screens/MenuScreen/MenuScreen';



const Tab = createBottomTabNavigator();

const Tabs = () => {
 
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
    name="Home"
    component={HomeScreen}
    options={{ tabBarIcon:({size,color}) =>(<Ionicons  name="home" size={30} color={color} />)
    }}
    
    
    />
    <Tab.Screen 
    name="About System"
    component={DocumentationScreen}
    options={{ tabBarIcon:({size,color}) =>(<Ionicons name="documents" size={30} color={color} />)
    }}
    
    />
    <Tab.Screen 
    name="Account Details"
    component={AccountScreen}
    options={{ tabBarIcon:({size,color}) =>(<Ionicons name="person" size={30} color={color} />)
    }}
    
    />
     <Tab.Screen 
    name="Menu"
    component={MenuScreen}
    options={{ tabBarIcon:({size,color}) =>(<Ionicons name="menu" size={30} color={color} />)
    }}
    
    />
 
    </Tab.Navigator>
  )
}

export default Tabs