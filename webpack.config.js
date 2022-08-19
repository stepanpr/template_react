const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
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
    //   {
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader"]
    //   },
	  	  {
        test: /\.scss$/,
		use: ['css-loader', 'sass-loader']
        // use: ExtractTextPlugin.extract(
        //   {
        //     fallback: 'style-loader',
        //     use: ['css-loader', 'sass-loader']
        //   })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
		
      template: "./src/index.html",
	  filename: 'index.html'
    })
  ]
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