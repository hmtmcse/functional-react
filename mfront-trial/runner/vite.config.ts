import {defineConfig, loadEnv} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig(({mode}) => {
    // 1️⃣ Load env from monorepo env folder
    const envFolder = path.resolve(__dirname, '../../env') // adjust based on your folder structure
    const env = loadEnv(mode, envFolder, '') // third param '' allows all vars without VITE_ prefix

    // 2️⃣ Convert env to define globals
    const defineEnv = Object.fromEntries(
        Object.entries(env)
            .filter(([key]) => /^[A-Z0-9_]+$/.test(key))
            .map(([key, value]) => [key, JSON.stringify(value)])
    )

    return {
        base: '/',
        plugins: [tsconfigPaths()],

        // 3️⃣ Dev server config
        server: {
            port: Number(env.PORT) || 1230, // use env PORT if defined
            open: true
        },

        // 4️⃣ Build config: hashed output + code splitting
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[name].[hash].js',
                    chunkFileNames: 'assets/[name].[hash].js',
                    assetFileNames: 'assets/[name].[hash].[ext]',
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            }
        },

        // 5️⃣ Inject env variables as global constants
        define: defineEnv
    }
})