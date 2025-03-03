import HomeScreen from '../uiNeoPop/HomeScreen';
import MyScreen from './MyScreen';

const config = {
    // names should be the same as stack navigation container
    screens: {
        App: {
            path: '/app/:id',
            parse: {
                id: (id) => `${id}`,
            },
        },
        HomeScreen: { path: '/homescreen' },
        MyScreen: { path: '/myscreen' },
    },
};

const linking = {
    // for deep linking
    // RNText://open/{ScreenName}/{ExtraInfoToRetrievex}
    prefixes:['RNTest://open'],
    config,
};

export default linking;
