import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  // build configuration
  if (command === 'build') {
    const pkg = await require('./package.json')
    return {
      plugins: [
        react(),
        svgrPlugin(),
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        sourcemap: true,
        lib: {
          name: 'DT-UI',
          entry: path.resolve(__dirname, 'src/index.ts'),
          formats: ['es', 'umd'],
          fileName: (format) => `dt-ui.${format}.js`,
        },
        rollupOptions: {
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
