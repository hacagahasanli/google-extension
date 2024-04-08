module.exports = {
    mode: 'development',
    entry: './src/test.tsx',
    module: {
        rules: [{
            use: 'ts-loader',
            test: /\.tsx$/,
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'index.js',
    }
}