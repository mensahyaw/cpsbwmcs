import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import CabonScreen from '../Screens/CabonScreen/CabonScreen';
import WasteScreen from '../Screens/WasteScreen/WasteScreen'; 
import ConversionScreen from '../Screens/ConversionScreen/ConversionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Otherlink = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
     
        <Stack.Screen name="CabonScreen" component={CabonScreen} />
        <Stack.Screen name="WasteScreen" component={WasteScreen} />
        <Stack.Screen name="ConversionScreen" component={ConversionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Otherlink