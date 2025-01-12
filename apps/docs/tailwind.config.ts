import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./node_modules/fumadocs-ui/dist/**/*.js",

    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
  ],
  presets: [
    createPreset({
      preset: "vitepress",
    }),
  ],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
