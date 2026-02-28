import {defineConfig, loadEnv} from 'vite'
import path from 'path'

export default defineConfig(({mode}) => {
    // 1️⃣ Load env from monorepo env folder
    const envFolder = path.resolve(__dirname, 'env') // adjust based on your folder structure
    const env = loadEnv(mode, envFolder, '') // third param '' allows all vars without VITE_ prefix

    console.log("envFolder == ", envFolder)
    console.log(env)

    // 2️⃣ Convert env to define globals
    const defineEnv = Object.fromEntries(
        Object.entries(env)
            .filter(([key]) => /^[A-Z0-9_]+$/.test(key))
            .map(([key, value]) => [key, JSON.stringify(value)])
    )

    return {
        base: '/',
        // 3️⃣ Dev server config
        server: {
            port: Number(env.PORT) || 1240, // use env PORT if defined
            open: true
        },
        // 5️⃣ Inject env variables as global constants
        define: defineEnv
    }
})