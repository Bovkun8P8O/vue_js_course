const path = require('path');


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'strip-loader',
            options: {
                strip: ['console.*', 'alert']
            }
        }]
    }
};
