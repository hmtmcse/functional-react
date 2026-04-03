import {defineConfig} from 'tsdown'

export const baseConfig = defineConfig({
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    minify: true,
    target: 'es2020',
    platform: 'browser',
    deps: {
        neverBundle: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'scheduler',
            'prop-types'
        ],
        skipNodeModulesBundle: false,
    }
})