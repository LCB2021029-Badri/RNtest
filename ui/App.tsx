import { StyleSheet, Text, View, Linking, Button } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

type AppRouteParams = {
  id?: string; // id is optional
};

type AppRouteProp = RouteProp<{ App: AppRouteParams }, 'App'>;

// basic app
const App = () => {
  const route = useRoute<AppRouteProp>();
  const {id} = route.params || {};
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
