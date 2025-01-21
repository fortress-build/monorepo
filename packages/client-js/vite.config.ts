import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      // This will generate .d.ts files in the `dist` folder
      // and also make sure your package.json "types" point is correct.
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
  },
});
