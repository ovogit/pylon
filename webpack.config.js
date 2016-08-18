module.exports= {
    entry: './src/js/app.js',
    output: {
        path: './js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        },{
            test: /\.pug$/,
            exclude:/node_modules/,
            loader:'pug-loader',    
        }, {
            test: /\.scss$/,
            exclude:/node_modules/,
            loaders:["style","css","sass"],
        }]
    }
};
