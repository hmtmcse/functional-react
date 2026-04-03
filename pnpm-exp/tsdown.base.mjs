import { defineConfig } from 'tsdown'

export const baseConfig = defineConfig({
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2020',
  platform: 'browser',
})