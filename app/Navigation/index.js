import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import WelcomepageScreen from '../Screens/WelcomepageScreen/WelcomepageScreen';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import CreateAccountScreen from '../Screens/CreateAccountScreen/CreateAccountScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ConfirmPasswordScreen from '../Screens/ConfirmPasswordScreen/ConfirmPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CabonScreen from '../Screens/CabonScreen/CabonScreen';
import WasteScreen from '../Screens/WasteScreen/WasteScreen'; 
import ConversionScreen from '../Screens/ConversionScreen/ConversionScreen';
import MainCabonScreen from '../Screens/MainCabonScreen/MainCabonScreen';
import MainWasteScreen from '../Screens/MainWasteScreen/MainWasteScreen';
import Tabs from './Tabs';
import Cabtabs from './Cabtabs';
import Wastetabs from './Wastetabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomepageScreen" component={WelcomepageScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ConfirmPasswordScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WasteScreen" component={WasteScreen} />
        <Stack.Screen name="CabonScreen" component={CabonScreen} />
        <Stack.Screen name="ConversionScreen" component={ConversionScreen} />
        <Stack.Screen name="Tab" component={Tabs} />
        <Stack.Screen name="Cabtabs" component={Cabtabs} />
        <Stack.Screen name="Wastetabs" component={Wastetabs} />
        <Stack.Screen name="MainCabonScreen" component={MainCabonScreen} />
        <Stack.Screen name="MainWasteScreen" component={MainWasteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation