const path = require('path');
console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js', // nazywamy jak chcemy ale ta jest dobra
        //  publicPath: '/'
    },
    
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        },{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    {
        // mode: 'development',
    },
    {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'img/',
                    name: '[name].[ext]'
                }
            }
        ]
    },]
        
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
    
};

