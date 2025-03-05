const config = {
    // names should be the same as stack navigation container
    screens: {
        App: {
            path: '/app/:id?',
            parse: {
                id: (id) => (id ? `${id}` : ''),
            },
        },
        HomeScreen: { path: '/homescreen' },
        MyScreen: { path: '/myscreen' },
    },
};

const Linking = {
    // for deep linking
    // RNText://open/{ScreenName}/{params}
    // https://example.com/{ScreenName}/{params}
    prefixes: ['RNTest://open'],
    config,
};

export default Linking;
