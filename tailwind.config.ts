/* eslint-env node */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      'main-orange': '#EE623F',
      'font-color': '#2A2B2E',
      'white': '#FFFFFF',
      'black': '#000000',
      'light-grey': '#E1E1E1',
      'grey': '#909090',
      'dark-grey': '#57595B',
      'blue': '#4384F2',
      'light-blue': '#E3F3FF',
      'bot-light-grey': '#FAFBFD',
      'input-text': '#AFB0B1',
    },
    fontFamily: {
      CalleoTrial: ['CalleoTrial'],
      Gilroy: ['Gilroy'],
    },
    /** Размеры экранов по ширине */
    screens: {
      little: { max: '480px' },
      smPre: { max: '650px' },
      sm: { min: '480px', max: '650px' },
      md: { max: '948px' },
      lg: { min: '948px', max: '1200px' },
      largePost: { min: '1200px' },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    iconsPlugin({
      collections: getIconCollections(['mdi']),
    }),
  ],
} as Config
