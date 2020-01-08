
const path = require('path');
var R = require('ramda');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../../css/[name].css"
            // chunkFilename: "commons.chunk.css",
            // chunkFilename: "[id].css"
        })
    ],
    entry: {
        'books_read': './react/src/entries/books-read.jsx',

        // // CSS NEXT FILES 
        'style_test': './post-css/style.css',
    },
    output: {
        'path': __dirname + '/react/scripts',
        'filename': '[name].js'
    },
    // devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/(node_modules|bower_components)/, path.join(__dirname, 'ckeditor')],
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        plugins: ["transform-class-properties", "transform-object-assign", "transform-object-rest-spread"],
                        presets: ["es2015", "react", "env"]
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000&name=./images/[hash].[ext]'
            },
            // {
            //     test: /\.css$/,
            //     use:['style-loader','css-loader']
            // }
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'post-css'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                ]

            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'post-css'),
                exclude: path.join(__dirname, 'react', 'css'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            puplicPath: path.join(__dirname, 'css')
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: loader => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-custom-selectors'),
                                require('postcss-preset-env')({
                                    stage: 0
                                }),
                                require('postcss-color-mod-function'),
                                require('cssnano')(),
                            ]
                        }
                    },
                ]

            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendors: {
    //                 name: "vendors",
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 chunks: "all"
    //             },
    //             default: {
    //                 name: "commons",
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // }
}

if (!R.contains('-p', process.argv)) {
    module.exports.mode = 'development';
    console.log('webpack.config.js: Called without -p, building for development');
}
else {
    module.exports.mode = 'production';
    console.log('webpack.config.js: Called with -p, building for production');
}
