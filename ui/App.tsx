import { StyleSheet, Text, View, Linking, Button } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';

type AppScreenRouteProp = RouteProp<{
  App: {
    id?: string;  // The id parameter is optional
  };
}, 'App'>;

interface AppProps {
  route: AppScreenRouteProp;
}

// basic app
const App = ({route}:AppProps) => {

  const id = route.params?.id || 'No ID found';
  console.log('Hello World!');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>App by badri in metro</Text>
      <Text style={styles.textStyles}>id from deep linking is {id} </Text>
      <Button title="To Browser via Linking" onPress={() => Linking.openURL('https://github.com/LCB2021029-Badri')}/>
      {/* <Button title="To Mail via Linking" onPress={() => Linking.openURL('mailto:badriakkalaofficial@gmail.com')} /> */}
      {/* <Button title="To Dail pad via Linking" onPress={() => Linking.openURL('tel:8919452831')} /> */}
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
