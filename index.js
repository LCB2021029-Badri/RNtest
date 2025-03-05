import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './ui/App';
import Screen2 from './ui/Screen2';
import ScreenFlexBox from './ui/ScreenFlexBox';
import MyScreen from './ui/MyScreen';
import HomeScreen from './uiNeoPop/HomeScreen';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Linking from './ui/Linking';

const Stack = createNativeStackNavigator();

const Badri = () =>{
    return(
        <NavigationContainer linking={Linking}>
            <Stack.Navigator initialRouteName="app">
                <Stack.Screen name="app" component={App}/>
                <Stack.Screen name="homescreen" component={HomeScreen}/>
                <Stack.Screen name="myscreen" component={MyScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

AppRegistry.registerComponent(appName, () => Badri);
