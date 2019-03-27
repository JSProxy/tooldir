module.exports = {
    presets: [['@vue/app', { useBuiltIns: 'entry' }]],
    plugins: [
        [
            'import',
            {
                libraryName: 'muse-ui',
                libraryDirectory: 'lib',
                camel2DashComponentName: false,
            },
        ],
    ],
};
