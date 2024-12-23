import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://blog-ai-1-us79.onrender.com', // Backend URL
        changeOrigin: true, // Ensures the Host header matches the target
        secure: true,       // Use this if your backend uses HTTPS
      },
    },
  },
  plugins: [react()],
});
