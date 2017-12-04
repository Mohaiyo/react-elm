/*
 * @ author  Mohaiyo
 * @ github  git@github.com:Mohaiyo/react-elm.git
 * @ use webpack 生产环境基本配置   问题--favicon.ico打包还是在js目录下面，需要解决该问题
 */

const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "../css/[name].[contenthash].css",
    //Disables the plugin
    disable: process.env.NODE_ENV === "development",
    //When using CommonsChunkPlugin and there are extracted chunks (from ExtractTextPlugin.extract) in the commons chunk, allChunks must be set to true
    allChunks: true
});
module.exports = {
    //为啥不是'../src/index.js',见如下博文解析
    //http://www.cnblogs.com/libin-1/p/6592114.html
    //process.cwd()即webpack运行所在的目录（等同package.json所在目录）
    // context: path.resolve('./src'),如果设置了，则需要把entry入口文件中的src去掉
    entry: {
        main:'./src/index.jsx',
        vendor:['moment','lodash','react','react-dom']
    },
    //inline-source-map 选项，这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
    devtool: 'source-map',
    // devServer: {
    //     contentBase: './dist',
    //     // hot: true
    // },
    //打包文件输出的目录，建议配置为绝对路径（相对路径不会报错），默认值和 context 的默认值一样，都是process.cwd()。
    //这里设置了node.js中的 __dirname，所以路径变成了react-elme/build，输出文件路径则为'../dist'
    output: {
       filename: '[name].[chunkhash].js',
       path: path.resolve(__dirname, '../dist/js/'),
       //静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
       publicPath:'/'
    },
    resolve:{
        //自动解析确定的扩展。默认值为：extensions: [".js", ".json"]
        extensions:[".js", "jsx",".json",".scss",".css",".less"],
        alias:{
            'src': path.resolve(__dirname, '../src/'),
            'style': path.resolve(__dirname, '../src/assets/style/'),
            'images': path.resolve(__dirname, '../src/assets/images/'),
            'components':path.resolve(__dirname, '../src/components/'),
            'containers':path.resolve(__dirname, '../src/containers/'),
            'services':path.resolve(__dirname, '../src/services/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use:extractSass.extract({
                    use: [{
                        loader: "css-loader" //将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader" // 将 JS 字符串生成为 style 节点
                })
            },
            {
                test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
                use: [
                    {   
                        //url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            //配置好像不正确，超过10000字节的文件没有输出？？？
                            name:'[name].[hash:7].[ext]',
                            outputPath:path.join(__dirname, '../dist/images')
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            limit: 10000,
                            //配置好像不正确
                            name:'[name].[hash:7].[ext]',
                            outputPath:path.join(__dirname, '../dist/fonts')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractSass,
        new CleanWebpackPlugin(['dist'],{
            root: path.join(__dirname, '../'),//项目目录
            verbose:  true,  //开启控制台输出
            dry:      false  //启用文件删除
        }),
        new HtmlWebpackPlugin({
            filename:path.join(__dirname, '../dist/index.html'),
            template:'index.html',
            inject:true,
            favicon:'favicon.ico',
            // Allows to control how chunks should be sorted before they are included to the html.
            chunksSortMode:'dependency',
            cache:true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'] // Specify the common bundle's name.
        }),
        //生产环境开启代码压缩功能
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          comments: false //去掉注释
        })
    ]
};