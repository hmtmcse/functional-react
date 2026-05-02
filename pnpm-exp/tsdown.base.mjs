import {defineConfig} from 'tsdown'

export const baseConfig = defineConfig({
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    minify: true,
    target: 'es2020',
    platform: 'neutral',
    output: {
        extension: {
            esm: '.mjs',
            cjs: '.cjs'
        }
    },
})