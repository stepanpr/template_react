const path = require('path')
const Config = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {PROJECT_NAME} = require('./consts')

/** Базовый конфиг. */
webpackBaseConfig = {
	    entry: {
        main: path.resolve('../src/index.tsx'), // точка входа приложения
    },
    output: {
        path: path.join(__dirname, '../dist/'), // точка выхода приложения, директория
        filename: '[name].[contenthash].js',
		publicPath: '/'
    },

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
	externals: {
		React: 'react',
		ReactDOM: "react-dom"
	},

}

exports.config = new Config(webpackBaseConfig)

