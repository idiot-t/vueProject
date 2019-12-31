const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const vueLoaderPlugin = require('vue-loader/lib/plugin.js');//

module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new vueLoaderPlugin(),

        
    ],
    module:{
        rules: [
            {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {test: /\.less$/, use: [ 'style-loader', 'css-loader','less-loader' ]},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.jpg|png|gif|bmp|jpeg$/,use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[hash:8]-[name].[ext]',
                        // publicPath: './dist/images',//打包文件的路径,（没看出效果）
                        outputPath: 'images',//打包的图片的路径
                        esModule: false,//启用commonJs语法，防止打包的url路径出问题
                    }
                }
            ]},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'},//处理 .vue 文件的loader
        ]
    },
    resolve: {
        alias: {//修改 vue 被导入时候包的路径
            "vue$": "vue/dist/vue.js",//导入以 vue 结尾的包的时候，导入vue下dist下的vue.js
        }
    }
};