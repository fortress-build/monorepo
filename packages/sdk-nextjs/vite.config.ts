import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import preserveDirectives from 'rollup-preserve-directives';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Ensures that Vite doesn’t remove 'use client'
      // from top-level strings in your .tsx files.
      // This plugin generally keeps them, but if not,
      // you can further customize esbuild options.
    }),
    preserveDirectives(),
    dts({
      rollupTypes: true,
      // This will generate .d.ts files in the `dist` folder
      // and also make sure your package.json "types" point is correct.
      insertTypesEntry: true,
      copyDtsFiles: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  esbuild: {
    // legalComments: "none",
    // keepNames: true,
  },
  build: {
    minify: false,
    lib: {
      entry: 'src/index.tsx',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'tailwindcss',
        'class-variance-authority',
        'next',
        'next/navigation'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
