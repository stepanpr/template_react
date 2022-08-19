const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  devServer: {
	port: 3333
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
	  filename: 'index.html'
    }),
	new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
		test: /\.(ts|tsx)$/,  //преобразовываем tsx и ts
        exclude: /node_modules/,
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.json'],
			alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
				App: path.resolve(__dirname, 'src/app/'),
				Pages: path.resolve(__dirname, 'src/pages/'),
			},
		  },
        use: {
          loader: "babel-loader" //используем загрузчик
        },
      },
      {
        test: /\.(css|less|scss)$/,
        use: ["style-loader", "css-loader", 'sass-loader']
      },
	  {
		test: /\.(jpg|jpeg|png|svg)/,
		use: ["file-loader"]
	  },
	//   	{
    //     test: /\.scss$/,
	// 	// use: ['css-loader', 'sass-loader']
    //     use: ExtractTextPlugin.extract(
    //       {
    //         fallback: 'style-loader',
    //         use: ['css-loader', 'sass-loader']
    //       })
    //   }
    ]
  },

};




// const prod = process.env.NODE_ENV === 'production';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   mode: prod ? 'production' : 'development',
//   entry: './src/index.tsx',
//   output: {
//     path: __dirname + '/dist/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         resolve: {
//           extensions: ['.ts', '.tsx', '.js', '.json'],
//         },
//         use: 'ts-loader',
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ]
//   },
//   devtool: prod ? undefined : 'source-map',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'index.html',
//     }),
//     new MiniCssExtractPlugin(),
//   ],
// };