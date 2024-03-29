const path = require("path")
// 引入html插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在目录
  output: {
    //  指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的文件
    filename: "bundle.js",
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          {
            // 指定加载器
            loader: "babel-loader",
            // 		设置babel
            options: {
              // 		设置预定义的环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 	配置信息
                  {
                    // 要兼用的目标浏览器
                    targets: {
                      chrome: "60",
                      ie: "11",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    //  使用corejs的版本 usage 按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },

          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  // 使用插件
  plugins: [
    new HtmlWebpackPlugin({
      // title: "自定义title",
      template: "./scr/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: [".js", ".ts"],
  },
}
