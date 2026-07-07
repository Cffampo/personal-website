//This is the configuration file for Vite itself. It tells Vite how to build and serve your application.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
