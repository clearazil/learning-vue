const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        bundle: './resources/assets/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: './public',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        },
    },
    mode: 'development',
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](vue|axios)[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2,
                },
            },
        },
    },
    plugins: [],
};

if (process.env.NODE_ENV === 'production') {
    module.exports.optimization.minimize = true;
    module.exports.mode = 'production';
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production',
            },
        }),
    );
}
