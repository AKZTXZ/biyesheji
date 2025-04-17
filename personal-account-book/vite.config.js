import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: (await import('sass-embedded')).default // 
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'views': resolve(__dirname, './src/views')
    }
  }
})
