const svgrWebpack = {
    test: /\.svg$/,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                icon: true,
            }
        }
    ]
};

export default {
    webpack(config) {
        config.module.rules.push(svgrWebpack);

        return config;
    },
};