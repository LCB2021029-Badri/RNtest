import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

const Screen3 = () => {
  return (
    <View style={styles.container}>
            <View style={styles.style1}/>
            <View style={styles.style2}/>
            <View style={styles.style3}/>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor:'white',
    },
    style1: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue',
    },
    style2: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
    },
    style3: {
        width: 200,
        height: 200,
        backgroundColor: 'steelblue',
    },

  });
