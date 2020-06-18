
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "心原书屋 书共享" },
      { name:'keywords',content:"书 小说 下载"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      { rel: 'stylesheet',href: 'https://cdn.bootcss.com/mini.css/2.3.7/mini-default.min.css'}
    ]
  },
  dev: process.env.NODE_ENV !== 'production',
  evn:{},

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
 //   'element-ui/lib/theme-chalk/index.css',
    {src: '~assets/styles/common.scss', lang: 'sass'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   // '@/plugins/element-ui'
   '~/plugins/global.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://cnodejs.org/api/v1',
    // or other axios configs.
  },
  /*
  ** Build configuration
  */
  build: {
   // transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
