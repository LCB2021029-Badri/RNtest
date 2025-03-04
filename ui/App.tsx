import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type AppRouteParams = {
//   id?: string; // id is optional
// };

// type AppRouteProp = RouteProp<{ App: AppRouteParams }, 'App'>;

type RootStackParamList = {
  App: { id?: string };
  HomeScreen: undefined;
  MyScreen: undefined;
};
type AppNavigationProp = NativeStackNavigationProp<RootStackParamList, 'App'>;
type AppRouteProp = RouteProp<RootStackParamList, 'App'>;

// basic app
const App = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const route = useRoute<AppRouteProp>();
  const {id} = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>id from deep linking is {id} </Text>
      <Button title="App Deep Link" onPress={() => navigation.navigate('App', {id:'123'}) }/>
      {/* <Button title="Update Options" onPress={() => navigation.setOptions({ title: 'Updated Options!' }) }/> */}
      {/* <Button title="To Browser via Linking" onPress={() => Linking.openURL('https://github.com/LCB2021029-Badri')}/> */}
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
