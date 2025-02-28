import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from "@vitejs/plugin-vue";

export default ({ mode }) =>{
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    base:  `${process.env.VITE_BASE_URL}/`,
    plugins: [
      vue({
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        vue: '@vue/compat'
      }
    },
    build: {
      commonjsOptions: {
        requireReturnsDefault: true
      }
    }
  })
}
// https://vitejs.dev/config/
