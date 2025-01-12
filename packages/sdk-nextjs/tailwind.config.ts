import type { Config } from "tailwindcss";

export const config: Config = {
  darkMode: ["class"],
  content: [
    "./node_modules/@nerve-js/next/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
};
