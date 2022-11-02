const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

commonConfig = {
    // entry: {
    //     main: path.resolve('../src/index.tsx'), // точка входа приложения
    // },
    // output: {
    //     path: path.join(__dirname, '../dist'), // точка выхода приложения, директория
    //     filename: '[name].[contenthash].js',
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TEMPLATE',
            template: path.join(__dirname, '../', 'public', 'index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            app: path.resolve(__dirname, '../src/app'),
            components: path.resolve(__dirname, '../src/components'),
            shared: path.resolve(__dirname, '../src/shared'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

class Config {
    constructor(commonConfig) {
        this.commonConfig = commonConfig;
        this.config = commonConfig;
    }

    /** Возвращает дефолтный конфиг на основе которого был создан экземпляр. */
    getCommonConfig() {
        return this.commonConfig;
    }

    /** Возвращает конфиг.. */
    getConfig() {
        return this.config;
    }

    /** Устанавливат мод. */
    setMode(mode) {
        this.config.mode = mode;
        return this;
    }

    /** Расширяет массив правил 'module.rules'. */
    extendRules(newRule) {
        this.config.module.rules.push(newRule);
        return this;
    }

    /** Расширяет массив плагинов. */
    extendPlugins(newPlugin) {
        this.config.plugins.push(newPlugin);
        return this;
    }

    /** Добавляет параметр для resolve. */
    extendResolve(name, value) {
        this.config.resolve[name] = value;
        return this;
    }

    /** Добавляет свойство верхнего уровня. */
    addProperty(name, value) {
        this.config[name] = value;

        return this;
    }
}

exports.config = new Config(commonConfig);

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// exports.commonConfig = {
//     // entry: {
//     //     main: path.resolve('../src/index.tsx'), // точка входа приложения
//     // },
//     // output: {
//     //     path: path.join(__dirname, '../dist'), // точка выхода приложения, директория
//     //     filename: '[name].[contenthash].js',
//     // },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'TEMPLATE',
//             template: path.join(__dirname, '../', 'public', 'index.html'), // шаблон
//             filename: 'index.html', // название выходного файла
//         }),
//         new CleanWebpackPlugin(),
//     ],
//     resolve: {
//         extensions: ['.js', '.ts', '.tsx'],
//         alias: {
//             app: path.resolve(__dirname, '../src/app'),
//             components: path.resolve(__dirname, '../src/components'),
//             shared: path.resolve(__dirname, '../src/shared'),
//         },
//     },
//     module: {
//         rules: [
//             {
//                 //typescript
//                 test: /\.(ts|tsx)$/, //преобразовываем tsx и ts
//                 exclude: /node_modules/,
//                 // resolve: {
//                 //     extensions: ['.ts', '.tsx', '.js', '.json'],
//                 //     // alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
//                 //     // 	app: path.resolve(__dirname, 'src/app/'),
//                 //     // 	components: path.resolve(__dirname, 'src/components/'),
//                 //     // },
//                 // },
//                 use: 'ts-loader',
//                 // {
//                 //     loader: 'ts-loader', //используем загрузчик
//                 // },
//             },
//         ],
//     },
// };

// exports.commonConfig = {
//     // entry: {
//     //     main: path.resolve('../src/index.tsx'), // точка входа приложения
//     // },
//     // output: {
//     //     path: path.join(__dirname, '../dist'), // точка выхода приложения, директория
//     //     filename: '[name].[contenthash].js',
//     // },

//     // devServer: {
//     // 	port: 3333
//     // },
//     // devtool: "inline-source-map", //eval-source-map
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'TEMPLATE',
//             template: path.join(__dirname, '../', 'public', 'index.html'), // шаблон
//             filename: 'index.html', // название выходного файла
//         }),
//         new CleanWebpackPlugin(),
//         // new MiniCssExtractPlugin(),
//     ],
//     resolve: {
//         extensions: ['.js', '.ts', '.tsx'],
//     },
//     module: {
//         rules: [
//             {
//                 //typescript
//                 test: /\.(ts|tsx)$/, //преобразовываем tsx и ts
//                 exclude: /node_modules/,
//                 // resolve: {
//                 // 	extensions: ['.ts', '.tsx', '.js', '.json'],
//                 // 	alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
//                 // 		App: path.resolve(__dirname, 'src/app/'),
//                 // 		Pages: path.resolve(__dirname, 'src/pages/'),
//                 // 	},
//                 // },
//                 use: 'ts-loader',
//                 // {
//                 //     loader: 'ts-loader', //используем загрузчик
//                 // },
//             },
//             // {
//             //     //стили
//             //     // test: /\.(css|scss)$/i,
//             //     // use: [MiniCssExtractPlugin.loader, 'css-loader'],

//             //     // use: [ MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
//             //     // use: [ MiniCssExtractPlugin.loader, "style-loader", "css-loader", 'sass-loader']
//             // },
//             // {
//             //     test: /\.less$/,
//             //     use: [
//             //         'style-loader',
//             //         {
//             //             loader: 'css-loader',
//             //             options: {
//             //                 modules: {
//             //                     localIdentName: '[local]__[hash:base64:5]',
//             //                     mode: 'local',
//             //                 },
//             //             },
//             //         },
//             //         'less-loader',
//             //     ],
//             // },
//             // { //изображения
//             // 	test: /\.(jpg|jpeg|png|svg)/,
//             // 	use: ["file-loader"]
//             // },

//             //   	{
//             //     test: /\.scss$/,
//             // 	// use: ['css-loader', 'sass-loader']
//             //     use: ExtractTextPlugin.extract(
//             //       {
//             //         fallback: 'style-loader',
//             //         use: ['css-loader', 'sass-loader']
//             //       })
//             //   }
//         ],
//     },
// };

// exports.lessDev = {
// 	    test: /\.less$/,
// 	    use: [
// 	        'style-loader',
// 	        {
// 	            loader: 'css-loader',
// 	            options: {
// 	                modules: {
// 	                    localIdentName: '[local]__[hash:base64:5]',
// 	                    mode: 'local',
// 	                },
// 	            },
// 	        },
// 	        'less-loader',
// 	    ],
// 	};

// export const lessProd = {
//     test: /\.less$/,
//     use: [
//         MiniCssExtractPlugin.loader,
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
