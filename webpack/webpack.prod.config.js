var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var ROOT_DIR = path.join(__dirname, '..');

module.exports = {
	context: ROOT_DIR,
	devtool: "source-map",
	entry: path.join(ROOT_DIR, 'lib/index.ts'),
	output: {
		path: path.join(ROOT_DIR, 'dist'),
		filename: 'light-build-launcher.js'
	},
	target: 'node',
    externals: [nodeExternals()],
	resolve: {
		extensions: ['', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			beautify: true,
			mangle: false
		})
	]
}