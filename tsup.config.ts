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
  outDir: 'dist',
  async onSuccess() {
    cleanupEmptyFolders(path.resolve('dist'))
  },
})

function cleanupEmptyFolders(folder: string) {
  if (!fs.statSync(folder).isDirectory()) {
    return
  }

  let files = fs.readdirSync(folder)

  if (files.length > 0) {
    files.forEach((file) => cleanupEmptyFolders(path.join(folder, file)))
    // Re-evaluate files; after deleting subfolders we may have an empty parent
    // folder now.
    files = fs.readdirSync(folder)
  }

  if (files.length == 0) {
    console.log('removing: ', folder)
    fs.rmdirSync(folder)
  }
}
