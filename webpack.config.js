const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: false,
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jshint-loader",
                        options: {
                            eqeqeq: true,
                            bitwise: true
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: { discardComments: { removeAll: true } }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                minimize: { discardComments: { removeAll: true } }
                            }
                        },
                        'autoprefixer-loader'
                    ]
                })
            },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
				}
			},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
		]
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            minimize: true,
            comments: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        }),
        new ExtractTextPlugin("styles.css")
    ],
	devServer: {
		inline:true,
		port: 8081
	}
}