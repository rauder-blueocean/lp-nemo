import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/webhook': {
        target: 'https://webhook.blueoceansem.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/webhook/, '/webhook/lpnemocrm2'),
        secure: true,
      },
      '/api/webhook-test': {
        target: 'https://n8n.blueoceansem.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/webhook-test/, '/webhook-test/lpnemocrm2'),
        secure: true,
      },
    },
  },
})
