const path = require("path");

// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");

// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中所有的配置信息
module.exports = {
  // 指定的入口文件
  entry: "./src/index.ts",

  // 指定打包文件的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件
    filename: "bundle.js",

    // 不使用箭头函数
    environments: {
      arrowFunction: false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 需要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置loader
            options: {
              // 设置指定环境
              presets: [
                // 指定环境插件
                "@babel/preset-env",
                // 配置信息
                {
                  // 需要兼容的浏览器
                  // targets: {
                  //   "chrome": "88",
                  // },
                  // // 指定corejs版本
                  //
                },
              ],
            },
          },
          "ts-loader",
        ],
        // 需要排除的文件
        exclude: /node_modules/,
      },
    ],
  },

  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
