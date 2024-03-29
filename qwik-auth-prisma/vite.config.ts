import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    server: { port: 3000 },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    optimizeDeps: { include: ['@auth/core'] },
  }
})
