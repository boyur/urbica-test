var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/js/App.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
              test: /\.css/,
              loaders: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}