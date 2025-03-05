const config = {
    // names should be the same as stack navigation container
    screens: {
        app: {
            path: '/app/:id?',
            parse: {
                id: (id) => (id ? `${id}` : ''),
            },
        },
        homescreen: { path: '/homescreen' },
        myscreen: { path: '/myscreen' },
    },
};

const Linking = {
    // for deep linking
    // rntest://open/{ScreenName}/{params}
    // https://example.com/{ScreenName}/{params}
    prefixes: ['rntest://open'],
    config,
};

export default Linking;
