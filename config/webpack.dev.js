// import { lessDev } from './webpack.common';

const { config } = require('./webpack.common.js');
const path = require('path');

// extendConfig.getCommonConfig()

const lessDev = {
    test: /\.less$/,
    use: [
        'style-loader',
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

const scssDev = {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
};

const devServer = {
    static: {
        directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true, // сжимаем все из public
    hot: true,
    port: 3333,
    // allowedHosts: 'all',
    // https: true,
    // proxy: {
    // 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
    //   },
};

module.exports = config
    .extendRules(lessDev)
    .extendRules(scssDev)
    .addProperty('devServer', devServer)
    .addProperty('devtool', 'inline-source-map')
    .setMode('development')
    .getConfig();

// config.extendPropertys('devServer', devServer)

// module.exports = {
//     ...config.getConfig(),
//     // devtool: 'inline-source-map',
//     // mode: 'development',
//     // devServer: {
//     //     static: {
//     //         directory: path.join(__dirname, 'public'),
//     //     },
//     //     open: true,
//     //     compress: true, // сжимаем все из public
//     //     hot: true,
//     //     port: 3333,
//     //     // allowedHosts: 'all',
//     //     // https: true,
//     //     // proxy: {
//     //     // 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
//     //     //   },
//     // },
//     // devtool: "inline-source-map", //eval-source-map
// };

console.log(config.getConfig().mode);
