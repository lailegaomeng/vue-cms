const path=require('path')
const webpack=require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    //大家已经学会了举一反三

    
    entry: path.join(__dirname,'./src/main.js'),   //入口，表示要使用webpack打包哪个文件
    output:{

        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
      open:true,
      port:3720,
      contentBase:'src',
      hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'

        })
        
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }

}