import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  storybook: {
    addons: [
      'storybook-addon-designs',
      '@storybook/addon-actions/register',
      '@storybook/addon-backgrounds/register',
      '@storybook/addon-controls/register',
      '@storybook/addon-docs/register',
      '@storybook/addon-toolbars/register',
      '@storybook/addon-viewport/register'
    ],
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ghome2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    'nuxt-typed-vuex'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],
  firebase:{
        config: {
          apiKey: "AIzaSyDI-dF_gSzgjild9fMsHO5OJ5967Wd-ehE",
          authDomain: "ghome2-9bed1.firebaseapp.com",
          projectId: "ghome2-9bed1",
          storageBucket: "ghome2-9bed1.appspot.com",
          messagingSenderId: "940471436745",
          appId: "1:940471436745:web:bace630c7c98f6e0f9d418",
          measurementId: "G-J9CFW4LKT9"
        },
        services: {
          auth:  true,
          firestore: true,
          functions: true,
        }
      },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  genearate: {
    interval: 2000,
  },
  publicRuntimeConfig: {
    giovanniUid: process.env.AUTH_USER_GIOVANNI
  }
}

export default config