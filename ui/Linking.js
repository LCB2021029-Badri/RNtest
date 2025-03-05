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

const linking = {
    // for deep linking
    // rntest://open/{ScreenName}/{params}
    // https://yourdomain.com/{ScreenName}/{params}
    prefixes: [
        'rntest://open',
        'https://yourdomain.com',
        'http://yourdomain.com',
    ],
    config,
};

export default linking;
