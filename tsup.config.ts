import path from 'path'
import fs from 'fs'

import { defineConfig } from 'tsup'

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')).toString())

export default defineConfig({
  // your entry file, can also use regexp like
  // ['src/index.ts', 'src/components/**/*.{ts,tsx}', '!src/components/**/*.stories.*']
  // to include all ts,tsx under components but stories.
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,

  // exclude all dependencies specified in package.json
  external: Object.keys(pkg),

  // auto generate types.d.ts
  dts: true,

  // esm for import, cjs for require
  format: ['esm', 'cjs'],
  minify: true,

  // make sure treeshake works
  treeshake: true,

  outDir: 'dist',

  // onSuccess callback
  async onSuccess() {
    // manual cleanup empty folders, because `clean` flag wont do this
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
