import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  App: { id?: string };
  HomeScreen: undefined;
  MyScreen: undefined;
};
type AppNavigationProp = NativeStackNavigationProp<RootStackParamList, 'App'>;
type AppRouteProp = RouteProp<RootStackParamList, 'App'>;

// basic app
const App = () => {

  /*
  // manual navigation of deep link
  useEffect(()=>{
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
    if(initialUrl === null){ return; }
    if(initialUrl.includes('app')){
      Alert.alert(initialUrl);
      navigation.navigate('app', {id:'1234'});
    }
    if(initialUrl.includes('homescreen')){
      Alert.alert(initialUrl);
      navigation.navigate('homescreen');
    }
    if(initialUrl.includes('myscreen')){
      Alert.alert(initialUrl);
      navigation.navigate('myscreen');
    }
    };
    getUrl();
  });
  */

  const navigation = useNavigation<AppNavigationProp>();
  const route = useRoute<AppRouteProp>();
  const {id} = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>id from deep linking is {id} </Text>

      <Button title="App Screen basic navigation" onPress={() => navigation.navigate('app', {id:'123'}) }/>


      <Button title="AppScreen Deep Link" onPress={() => Linking.openURL('rntest://open/app/123').catch(err => console.error("Couldn't open URL", err)) }/>
      <Button title="HomeScreen Deep Link" onPress={ () => Linking.openURL('rntest://open/homescreen').catch(err => console.error("Couldn't open URL", err)) }/>
      <Button title="MyScreen Deep Link" onPress={() => Linking.openURL('rntest://open/myscreen').catch(err => console.error("Couldn't open URL", err)) }/>

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
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
