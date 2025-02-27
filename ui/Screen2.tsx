import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

// last style in the style array has precedence
const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Screen2</Text>
      <Text style={[styles.red]}> Sample red</Text>
      <Text style={[styles.bigBlue]}> Sample bigBlue</Text>
      <Text style={[styles.red, styles.bigBlue]}> Sample red then bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}> Sample bigBlue then red</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor:'white',
    },
    textStyles:{
      fontSize: 20,
      textAlign: 'center',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      red: {
        color: 'red',
      },
  });
