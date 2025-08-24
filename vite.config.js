import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configuration Vite optimisée pour React + Tailwind + ShadCN UI
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias pour accéder facilement aux dossiers
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    // Pour éviter l'overlay rouge HMR si erreurs mineures
    hmr: {
      overlay: true,
    },
  },
})
