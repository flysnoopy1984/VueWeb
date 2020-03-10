module.exports = {
    // webpack配置 - 简单配置方式
    configureWebpack: {
      devtool:'souce-map',
      resolve: {
        alias: {
          // 别名
          vue$: "vue/dist/vue.esm.js", //加上这一句
         
        }
      }
    }
}