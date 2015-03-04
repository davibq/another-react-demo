
module.exports = {
    entry: {
        main: "./app/client/main"
    },
    output: {
        path: './app/public/js/',
        filename: "[name].js",
        chunkFilename: '[id].chunk.js'
    },
    module: {
    	loaders: [
    		{ test: /\.js$/, loader: 'jsx-loader?harmony' }
    	]
    }
};
