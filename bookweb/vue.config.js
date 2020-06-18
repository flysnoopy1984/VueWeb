const path = require('path')
function resolve (dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    devServer: {
      port: 8080,
    },
    pages: {
        app: {
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html',
        },
      },
    //   chainWebpack(config) {
    //     config.module
    //         .rule('svg')
    //         .exclude.add(resolve('src/icons'))
    //         .end()
    //     config.module
    //         .rule('icons')
    //         .test(/\.svg$/)
    //         .include.add(resolve('src/icons'))
    //         .end()
    //         .use('svg-sprite-loader')
    //         .loader('svg-sprite-loader')
    //         .options({
    //             symbolId: 'icon-[name]'
    //         })
    //         .end()
    // }
}

