import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ScreenFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1} />
      <View style={styles.container2} />
      <View style={styles.container3} />
    </View>
  );
};

export default ScreenFlex;

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:300,
    backgroundColor:'white',
  },
  container1:{
    flex:1, // 1 part of the remaining space
    backgroundColor:'powderblue',
  },
  container2:{
    flex:2, // 2 parts of the remaining space
    backgroundColor:'skyblue',
  },
  container3:{
    height:'33%',// 33 percent of the parent
    width:'55%',
    backgroundColor:'steelblue',
  },
});
