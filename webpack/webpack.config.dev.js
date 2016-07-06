const path = require('path');
const webpack = require('webpack');

const paths = {
	app: path.resolve(__dirname, '../src'),
	build: path.resolve(__dirname, '../build')
}

const plugins = [
	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('dev'),
		__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
	}),
	new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = {
	env: process.env.NODE_ENV,
	entry: {
		app: path.resolve(paths.app, 'index.js'),
		vendor: ['react']
	},
	output: {
		path: paths.build,
		filename: '[name].js',
		publicPath: '/'
	},
	stats: {
		colors: true,
		reasons: true
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel'],
				include: paths.app,
				exclude: /node_modules/
			}
		]
	},
	plugins: plugins,
	devServer: {
		contentBase: path.resolve(__dirname, '../src'),
		port: process.env.PORT || 3000,
		historyApiFallback: true
	},
	devtool: 'eval'
};