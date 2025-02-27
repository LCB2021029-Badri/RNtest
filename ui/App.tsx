import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// basic app

const App = () => {
  console.log('Hello World!');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>App by badri in metro.</Text>
    </View>
  );
};

export default App;

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
});
