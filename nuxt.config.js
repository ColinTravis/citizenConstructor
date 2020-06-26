
const meta = {
  title: 'citizen.Constructor',
  description: 'Beginning Citizen Registration...',
  url: '',
  image: '/meta.jpg',
};

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'en-US',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { name: 'theme-color', content: '#000000' },

      // Generic
      { itemprop: 'name', hid: 'name', content: meta.title },
      { itemprop: 'url', hid: 'url', content: meta.url },
      {
        itemprop: 'description',
        hid: 'description',
        content: meta.description,
      },
      { itemprop: 'image', hid: 'image', content: meta.image },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:title', hid: 'og:title', content: meta.title },
      { property: 'og:url', hid: 'og:url', content: meta.url },
      {
        property: 'og:description',
        hid: 'og:description',
        content: meta.description,
      },
      { property: 'og:image', hid: 'og:image', content: meta.image },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'canonical', href: meta.url },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['augmented-ui/augmented.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
  ],
  /*
   ** Web Font
   */
  webfontloader: {
    google: {
      families: ['Krona+One&display=block'], //Loads Lato font with weights 400 and 700
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
