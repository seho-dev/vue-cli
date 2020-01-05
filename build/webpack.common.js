/**
 * webpack的公共配置
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//. 参考官方文档 https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
//. Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[hash]_[name].js",
    },
    resolve: {
        // 拓展名，在引入文件的时候，不用写以下的后缀，让webpack自己去寻找
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve('src'),
            // 这是因为正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本，需要在配置文件中添加如下代码
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'file-loader',
            options: {
                name: "[name].[ext]"
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                // 把较小的图片转换成base64的字符串内嵌在生成的js文件里
                limit: 10000,
                name:'[name].[ext]'
            }
        }, {
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                "postcss-loader",
                'stylus-loader'
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    }), new VueLoaderPlugin(), new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../public'), // 不打包直接输出的文件
        to: '', // 打包后静态文件放置位置
        ignore: ['.*'] // 忽略规则。（这种写法表示将该文件夹下的所有文件都复制）
    }])]
}