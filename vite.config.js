import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096, // 4kb
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})