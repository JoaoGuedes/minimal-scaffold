var path = require('path');

var paths = {
    src    : path.resolve(__dirname, 'public', 'scripts'),
    assets : path.resolve(__dirname, 'public', 'assets')
};

module.exports = {
    context: paths.src,

    entry: {
        'bundle.js'    : ['webpack/hot/dev-server', './bootstrap.js'],
        //'styles.js' : [ 'webpack/hot/dev-server', './scss/styles.scss' ]
    },

    output: {
        path       : paths.assets,
        publicPath : '/assets/',
        filename   : '[name]'
    },

    module: {
        loaders: [
            {
                test    : /\.html$/,
                loader  : 'raw'
            },
            {
                test    : /\.js$/,
                loader  : 'babel',
                exclude : /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        proxy: {
            '/api*': {
                target : 'http://localhost:9000',
                secure : false,
            }
        },
    }
};
