export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Подарки для самых любимых и близких — изделия из кожи от мастерской Varenik Leather',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'description',
        content:
          'Лучший подарок на любой случай жизни! 100% ручная работа. Только натуральная кожа. Делаем сумки, кошельки, ремни и многое другое. Учтем все Ваши пожелания!',
      },
      {
        name: 'keywords',
        content:
          'аксессуары,кожа,натуральная кожа,ручная работа,универсальный подарок,подарок маме,подарок папе,подарок мужу,подарок жене,подарок,мастерская,кошелек на заказ,сумка на заказ,ремень на заказ,обложка для паспорта на заказ,изделия из кожи на заказ,на заказ,кошелек ручной работы купить,сумка ручной работы купить,ремень ручной работы купить',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/_variables.scss',
    '~assets/scss/main.scss',
    '~assets/scss/fonts.scss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/svg-sprite'],

  styleResources: {
    scss: ['~assets/scss/_variables.scss', '~assets/scss/_mixins.scss'],
  },

  svgSprite: {
    input: '~/assets/svg/icons',
    output: '~/assets/svg/gen',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir: 'varenikleatherprod',
  },
};
