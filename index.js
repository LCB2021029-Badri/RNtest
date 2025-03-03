import {AppRegistry} from 'react-native';
import App from './ui/App';
import Screen2 from './ui/Screen2';
import ScreenFlexBox from './ui/ScreenFlexBox';
import MyScreen from './ui/MyScreen';
import HomeScreen from './uiNeoPop/HomeScreen';
import {name as appName} from './app.json';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Linking from './ui/Linking';

const Stack = createNativeStackNavigator();

// todo: export types here for navigation

const Badri = () =>{
    return(
        <NavigationContainer linking={Linking}>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="MyScreen" component={MyScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

AppRegistry.registerComponent(appName, () => Badri);
