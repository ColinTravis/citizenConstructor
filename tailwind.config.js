/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'test-cyan': '#222222',
      },
      transitionProperty: {
        'height': 'height'
      },
      transitionTimingFunction: {
        'ease-in-cubic': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      fontFamily: {
        krona: ['Krona One'],
        ethnocentric: ['Ethnocentric'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
