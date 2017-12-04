/*
 * @ author  Mohaiyo
 * @ github  git@github.com:Mohaiyo/react-elm.git
 * @ use webpack 开发环境基本配置
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:  [
    //除了可以用数组的形式，也可以用对象的形式，但是开发环境不用考虑那么多，直接一个入口文件搞定
    'react-hot-loader/patch',
    // 开启react代码的模块热替换（HMR）
    'webpack-dev-server/client?http://localhost:8080',
    // 为webpack-dev-server的环境打包好运行代码
    // 然后连接到指定服务器域名与端口
    'webpack/hot/only-dev-server',
    // 为热替换（HMR）打包好运行代码
    // only- 意味着只有成功更新运行代码才会执行热替换（HMR）
    './src/index.jsx'
    // 我们app的入口文件
    ],
    //打包文件输出的目录，建议配置为绝对路径（相对路径不会报错），默认值和 context 的默认值一样，都是process.cwd()。
    //这里设置了node.js中的 __dirname，所以路径变成了react-elme/build，输出文件路径则为'../dist'
    output: {
       filename: '[name].[hash].js',
       path: path.resolve(__dirname, '../dist'),
       //静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
       publicPath:'/'
    },
    //inline-source-map 选项，这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        compress: true,
        contentBase: './dist',
        hot: true,
        publicPath: '/',
        port: 8080,
        proxy: {
        '/' : {
                //  target: 'http://www.boyagirl.com:8080',
                target: 'http://cangdu.org:8001',
                secure: false
            },
        rewrite:'/'
        }
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
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                //从右往左读先解释css然后将css转化为js
                use: ['style-loader','css-loader?modules']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader?sourceMap','sass-loader?sourceMap']
            },
            {
                test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        //url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
            inject:true,
            favicon:'favicon.ico',
            // Allows to control how chunks should be sorted before they are included to the html.
            chunksSortMode:'dependency'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
         new webpack.NamedModulesPlugin()
    ]
};