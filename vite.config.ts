import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio3d/', 
  plugins: [react()],
  server: {
    port: 3000
  }
})