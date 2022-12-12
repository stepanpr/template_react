const CopyWebpackPlugin = require('copy-webpack-plugin')

/** Базовый конфиг. */
const {config} = require('./webpack.common.js')
const path = require('path')

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

const cwp =     new CopyWebpackPlugin({
	patterns: [
	  { from: __dirname, to: "../src/index.html" },
	//   { from: "other", to: "public" },
	],
  });


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
    port: 3334,
	historyApiFallback: true
    // allowedHosts: 'all',
    // https: true,
    // proxy: {
    // 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
    //   },
};

console.log(config)

module.exports = config
.extendRules(lessDev)
.extendRules(scssDev)

.setMode('development')
// .addProperty('entry', entryDev)
.addProperty('devServer', devServer)
.extendPlugins(cwp)
// .extendRules(cssDev)
.addProperty('devtool', 'inline-source-map')
.getConfig()
// .setMode('development')
// // .addProperty('entry', entryDev)
// .addProperty('devServer', devServer)
// // .extendPlugins(copyWebpackPlugin)
// // .extendRules(cssDev)
// .extendRules(scssDev)
// .extendRules(lessDev)
// .addProperty('devtool', 'eval-source-map')
// .getConfig()
















// // import { lessDev } from './webpack.common';

// const { config } = require('./webpack.common.js');
// const path = require('path');

// // extendConfig.getCommonConfig()

// const lessDev = {
//     test: /\.less$/,
//     use: [
//         'style-loader',
//         {
//             loader: 'css-loader',
//             options: {
//                 modules: {
//                     localIdentName: '[local]__[hash:base64:5]',
//                     mode: 'local',
//                 },
//             },
//         },
//         'less-loader',
//     ],
// };

// const scssDev = {
//     test: /\.scss$/,
//     use: ['style-loader', 'css-loader', 'sass-loader'],
// };

// const devServer = {
//     static: {
//         directory: path.join(__dirname, 'public'),
//     },
//     open: true,
//     compress: true, // сжимаем все из public
//     hot: true,
//     port: 3333,
// 	historyApiFallback: true,
//     // allowedHosts: 'all',
//     // https: true,
//     // proxy: {
//     // 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
//     //   },
// };

// module.exports = config
//     .extendRules(lessDev)
//     .extendRules(scssDev)
//     .addProperty('devServer', devServer)
//     .addProperty('devtool', 'inline-source-map')
//     .setMode('development')
//     .getConfig();

// // config.extendPropertys('devServer', devServer)

// // module.exports = {
// //     ...config.getConfig(),
// //     // devtool: 'inline-source-map',
// //     // mode: 'development',
// //     // devServer: {
// //     //     static: {
// //     //         directory: path.join(__dirname, 'public'),
// //     //     },
// //     //     open: true,
// //     //     compress: true, // сжимаем все из public
// //     //     hot: true,
// //     //     port: 3333,
// //     //     // allowedHosts: 'all',
// //     //     // https: true,
// //     //     // proxy: {
// //     //     // 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
// //     //     //   },
// //     // },
// //     // devtool: "inline-source-map", //eval-source-map
// // };

// console.log(config.getConfig().mode);
