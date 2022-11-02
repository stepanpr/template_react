const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { config } = require('./webpack.common.js');

const lessProd = {
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[local]__[hash:base64:5]',
                    mode: 'local',
                },
            },
        },
        'less-loader',
    ],
};

const scssProd = {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
};

console.log(config.getConfig());

module.exports = {
    ...config
        .setMode('production')
        .extendPlugins(new MiniCssExtractPlugin())
        .extendRules(lessProd)
        .extendRules(scssProd)
        .getConfig(),
    // ...commonConfig,
    // mode: 'production',
};
