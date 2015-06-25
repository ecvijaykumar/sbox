var webpack = require('webpack');  
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
    entry: [
//	'webpack/hot/only-dev-server',
	"./src/js/app.js"	
    ],
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
	
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},

            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
	    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
	    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
	    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
	    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
	    
	    { test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: [
		  'file?hash=sha512&digest=hex&name=[hash].[ext]',
		  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
              ]
	    },
	    {
	     	test: /\.scss$/,
	     	loader: 'style!css!sass'		    
	    }
 /*
	    { test: /\.eot$/,  loader: "file-loader" },
	    { test: /\.woff2?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
	    { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
	    { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
	    
	    { test: /\.css$/,   loader: 'style!css!autoprefixer'},
	    { test: /\.scss$/,  loader: 'style!css!autoprefixer!sass'},

*/	    

	    //{ test: /\.css$/,   loader: 'style!css!autoprefixer'},
	    //{ test: /\.scss$/,  loader: 'style!css!autoprefixer!sass'},
	   
	]
    },
    resolve: {
	// you can now require('file') instead of require('file.jsx')
	extensions: ['', '.jsx', '.js', 'scss', 'sass']
    },
    plugins: [
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin("[name].css", { allChunks: true })
    ]

};
