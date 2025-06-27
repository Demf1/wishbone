import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
resolve: {
        alias: {
            '@styles': fileURLToPath(new URL('./src/scss', import.meta.url)),
            '@icons': fileURLToPath(new URL('./src/icons', import.meta.url)),
            '@img': fileURLToPath(new URL('./src/img', import.meta.url)),
        }
    },
})