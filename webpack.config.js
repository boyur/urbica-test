var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
      'whatwg-fetch',
      './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
              test: /\.css/,
              loaders: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}