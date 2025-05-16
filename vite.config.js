import {fileURLToPath, URL} from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fromJSON } from 'postcss'

// https://vite.dev/config/
export default defineConfig({
  exports :{
    publicPath: process.env.NODE_ENV === 'production'
      ? '/imam/'
      : '/'
  },
  base: '/https://ibraibc.github.io/imam/',
  plugins: [vue()],
  resolve: {
    alias:{
      '@':fileURLToPath(new URL("./src",import.meta.url))
    }
  }
})
