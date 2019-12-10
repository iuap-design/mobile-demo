
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')


var files = glob.sync('./src/*/index.js');
var entries = {
    app:'./src/app.js',
},
    entry, dirname, basename, pathname, extname;
for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.join(dirname, basename);
    pathname = pathname.replace('src/','').replace('/index','');
    entries[pathname] = entry;
}


module.exports = env => {
    return {
        entry: entries,
        output: {
            path: path.resolve('.', './dist'),
            filename: '[name]/demo.js',
            chunkFilename: '[name]/demo.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    exclude: /(node_modules)/,
                    include: [path.resolve('.', 'src')],
                    use: [{
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            presets: [
                                require.resolve('@babel/preset-env'),
                                require.resolve('@babel/preset-react')
                            ],
                            plugins: [
                                [require.resolve('@babel/plugin-transform-runtime'), {
                                    'corejs': false,
                                    'helpers': true,
                                    'regenerator': true,
                                    'useESModules': false
                                }],
                                [require.resolve('babel-plugin-dynamic-import-webpack'), {
                                    'helpers': false,
                                    'polyfill': true,
                                    'regenerator': true
                                }],
                                [require.resolve('@babel/plugin-proposal-decorators'), {
                                    "legacy": true
                                }],
                                [require.resolve('@babel/plugin-proposal-class-properties'), {
                                    "loose": true
                                }],
                            ]
                        }
                    }]
                },
                {
                    test: /\.less$/,
                    use: [
                        "style-loader", 
                        "css-loader", 
                        "less-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader", 
                        "css-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 1024 * 8
                        }
                    }
                },
                {
                    test: /\.(ttf|eot|woff|woff2|svg)(\?.+)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1024
                        }
                    }
                }
            ]
        },
        plugins: [
            // new webpack.HotModuleReplacementPlugin()
            new CopyWebpackPlugin([
                {
                    from: __dirname+'/src/',
                    to: __dirname+'/dist/'
                }
            ]),
            new MiniCssExtractPlugin({
                filename: '[name]/demo.css',
                chunkFilename: '[name]/demo.css',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          })
        ]
    }
}