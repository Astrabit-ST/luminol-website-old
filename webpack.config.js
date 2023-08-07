const manifest = require('./package.json')
const path = require('node:path')

/* Plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	node: { global: false },
	entry: `./${manifest.main}`,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		extensionAlias: {
			'.js': ['.js', '.ts'],
			'.cjs': ['.cjs', '.cts'],
			'.mjs': ['.mjs', '.mts']
		}
	},
	module: {
		rules: [
			/* Styles */
			{ test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
			/* Assets */
			{ test: /\.svg$/, loader: 'svg-inline-loader' },
			/* Code */
			{ test: /\.([cm]?ts|tsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico',
			minify: false
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'assets', to: 'assets' }
			]
		})
	],
	devServer: {
		static: 'dist'
	}
}