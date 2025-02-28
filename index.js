import {AppRegistry} from 'react-native';
import App from './ui/App';
import Screen2 from './ui/Screen2';
import ScreenFlexBox from './ui/ScreenFlexBox';
import MyScreen from './ui/MyScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyScreen);
