const path = require('path')

const webpackBaseConfig = {
  entry:path.join(__dirname,"../src/index.jsx"),
  output:{
    path:path.join(__dirname,"../dist"),
    filename:'[name].[fullhash:4].js'
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.js[x]/,
        use:'babel-loader'
      },
      {
        test:/\.css/,
        use:['style-loader','css-loader',]
      }
    ]
  }
}

module.exports = webpackBaseConfig