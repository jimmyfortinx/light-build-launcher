var path = require('path');
var webpack = require('webpack');
var JasmineWebpackPlugin = require('jasmine-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var ROOT_DIR = path.join(__dirname, '..');

module.exports = {
	context: ROOT_DIR,
	devtool: 'source-map',
	devServer: {
		stats: 'errors-only',
	},
	entry: {
		main: path.join(ROOT_DIR, '/lib/spec-root.ts')
	},
	output: {
		path: path.join(ROOT_DIR, 'spec'),
		publicPath: '/spec/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	},
	plugins: [
		new JasmineWebpackPlugin(),
		new OpenBrowserPlugin({
            url: "http://localhost:8080/spec/_specRunner.html"
        })
	]
}