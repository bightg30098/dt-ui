import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      fileName: 'components',
      formats: ['es', 'cjs'],
    },
  },
});
