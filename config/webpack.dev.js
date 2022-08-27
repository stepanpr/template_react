const webpackCommon = require('./webpack.common.js');
const path = require('path');

module.exports = {
  ...webpackCommon,
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
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
  }
};