var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: 'dist/assets/bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		test: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ['babel-loader'],
				query: {
					presets: ['env', 'react']
				}
			},
			{
				
			}
		]
	}
}