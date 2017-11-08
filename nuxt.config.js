module.exports = {
  plugins: [
    '~plugins/buefy',
    {
      src: '~plugins/passport',
      ssr: false
    }
  ],
  env: {
    API_AUTH_URL: 'http://localhost:8000',
    PASSPORT_CLIENT_ID: 4,
    PASSPORT_SECRET: 'vinkwHGun7PCf11rOQjN58Vz7ofymcxVC0i3Ow9Q',
    JSONAPIBaseUrl: 'http://localhost:8000/api'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'One Story',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-cssnext': {
          browserslist: [
            "> 1%",
            "last 2 versions"
          ],
          features: {
            customProperties: false
          }
        },
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
