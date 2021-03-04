const path = require("path");

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
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 需要使用的loader
        use: "ts-loader",
        // 需要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
};
