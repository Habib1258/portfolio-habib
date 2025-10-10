import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Important for correct routing on production
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'dist', // default, but be explicit if needed
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
