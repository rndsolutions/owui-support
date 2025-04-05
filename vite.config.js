import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/owui-support/', // Ensure this matches the repository name
  plugins: [react()],
})
