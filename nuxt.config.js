import axios from 'axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    routes() {
      return axios.get('http://localhost:3000/data/portfolio.json').then(res => {
        return res.data.map(project => {
          return '/work/' + project.slug
        })
      })
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Taha bou | backend devoloper',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
      }
    ],
    script: [
      {
        src: "/js/jquery.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: false,
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
