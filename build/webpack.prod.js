const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/main.js",
    // prod独有的配置  treeshaking和splitChunks
    optimization: {
        // 代码分割
        splitChunks: {
            chunks: 'all'
        },
        // 配置treeshaking
        usedExports: true
    },
    plugins: [new CleanWebpackPlugin()]
})