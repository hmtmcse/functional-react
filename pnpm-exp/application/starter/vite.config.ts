import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({mode}) => {
    const envFolder = path.resolve(__dirname, '../env')
    const env = loadEnv(mode, envFolder, '')

    const defineEnv = Object.fromEntries(
        Object.entries(env)
            .filter(([key]) => /^[A-Z0-9_]+$/.test(key))
            .map(([key, value]) => [key, JSON.stringify(value)])
    )

    return {
        base: '/',
        plugins: [react()],

        server: {
            port: Number(env.PORT) || 1240,
            open: true
        },
        resolve: {
            preserveSymlinks: true,
            tsconfigPaths: true,
        },
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[name].[hash].js',
                    chunkFileNames: 'assets/[name].[hash].js',
                    assetFileNames: 'assets/[name].[hash].[ext]',
                    manualChunks(id) {  // Need to improve it
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            }
        },

        define: defineEnv
    }
})