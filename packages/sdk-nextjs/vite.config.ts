import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Ensures that Vite doesn’t remove 'use client'
      // from top-level strings in your .tsx files.
      // This plugin generally keeps them, but if not,
      // you can further customize esbuild options.
    }),
    dts({
      rollupTypes: true,
      // This will generate .d.ts files in the `dist` folder
      // and also make sure your package.json "types" point is correct.
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  esbuild: {
    legalComments: "none",
    keepNames: true,
  },
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
