var extractText = require('extract-text-webpack-plugin');
module.exports = {
    entry: [`${__dirname}/src/jsx/index.jsx`, `${__dirname}/src/scss/style.scss`],
    output: {
        path: `${__dirname}/dist/js`,
        filename: "bundle.js",
        publicPath: '/js'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-object-rest-spread', 'transform-class-properties']
                }
            }
        }, {
            test: /\.css$/,
            use: extractText.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            })
        },
        {
            test: /\.scss$/,
            use: extractText.extract({
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    "sass-loader"
                ]
            })
        }]
    },
    watch: true,
    plugins: [
        new extractText({
            filename: "../css/style.css"
        })
    ],
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    }
}