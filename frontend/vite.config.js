import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Al estar en una subcarpeta /frontend_app/ en cPanel, Vite debe usar este base path
  base: '/frontend_app/',
  server: {
    port: 5173,
    proxy: {
      '/backend_app': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
