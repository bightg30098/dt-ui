import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  // build configuration
  if (command === 'build') {
    const pkg = await require('./package.json')
    return {
      plugins: [
        react(),
        svgrPlugin(),
        // inject index.d.ts
        dts({
          insertTypesEntry: true,
        }),
        // remove following comment if you want to include css in js bundles.
        // cssInjectedByJsPlugin(),
      ],
      build: {
        lib: {
          name: 'DT-UI',
          entry: path.resolve(__dirname, 'src/index.ts'),
          formats: ['es', 'umd'],
          fileName: (format) => `dt-ui.${format}.js`,
        },
        rollupOptions: {
          // exclude external pkgs in package.json dependencies: ['react', 'react-dom', ...]
          external: Object.keys(pkg.dependencies),
          output: {
            globals: {
              react: 'React',
            },
          },
        },
      },
    }
  }

  // serve configuration
  return {
    plugins: [react(), svgrPlugin()],
  }
})
