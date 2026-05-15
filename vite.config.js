import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ds881-curriculo-grr20215673/',
  server: {
    port: 8080,
    host: true,
    watch: {
      usePolling: true,  // ← necessário no Windows com Docker
    },
  },
  preview: {
    port: 8080,
    host: true,
  },
})
