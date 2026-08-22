import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  output: 'static',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@data': join(root, '..', 'data'),
      },
    },
  },
})
