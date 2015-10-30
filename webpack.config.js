var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    entry: {
        bundle : ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
           './src/js/index.js'],
        vendor :['react','react/addons','react-router']
    },
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        path: path.join(__dirname, "dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot','babel-loader?optional=runtime'],
                include: path.join(__dirname, "src/js")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader!autoprefixer-loader")
            }
        ]
    },
    externals: {
        //don't bundle the 'jquery' npm package with our bundle.js
        //but get it from a global 'jQuery' variable
        'jQuery': 'jQuery'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [ new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin(
        /* chunkName= */"vendor",
        /* filename= */"vendor.js"
    ),new ExtractTextPlugin('style.css', {
            allChunks: true
        })]
};