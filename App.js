
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Navigation from './app/Navigation';


const App =() => {
  return (
  <SafeAreaView style={styles.root}>
<Navigation />
</SafeAreaView>
  );
} 
const styles = StyleSheet.create({
  root:{
    height:'100%',
flax: 1,
backgroundColor:"#d1d3d2",
  },
});

export default App; 
