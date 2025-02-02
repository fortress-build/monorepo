import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      // This will generate .d.ts files in the `dist` folder
      // and also make sure your package.json "types" point is correct.
      insertTypesEntry: true,
      copyDtsFiles: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(/\/\*\s*@internal\s*\*\//g, ''),
      }),
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
});
