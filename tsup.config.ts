import path from 'path'
import fs from 'fs'

import { defineConfig } from 'tsup'

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')).toString())

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  external: Object.keys(pkg),
  dts: true,
  format: ['esm', 'cjs'],
  minify: true,
  treeshake: true,
})
