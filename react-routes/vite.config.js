import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: false, // Disable Hot Module Replacement (HMR)
    headers: {
      'Content-Security-Policy': "script-src 'self' 'unsafe-eval'",
    },
  },
  build: {
    sourcemap: false, // Disable source maps, which may rely on eval()
  },
})
