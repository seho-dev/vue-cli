const webpack = require("webpack"); // 引入webpack引用
const merge = require("webpack-merge");
const common = require("./webpack.common");


module.exports = merge(common,{
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    // dev模式下独有的webpack-dev-server配置
    devServer: {
        contentBase: "./dist",
        open: true,
        // HMR
        hot: true,
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
})

