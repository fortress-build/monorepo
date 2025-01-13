// import typography from "@tailwindcss/typography";
// import type { Config } from "tailwindcss";
// import animate from "tailwindcss-animate";
// import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: [
    "./node_modules/@nerve-js/next/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./dist/**/*.{ts,tsx,js,jsx}",
    "./hooks/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
    "./providers/**/*.{ts,tsx,js,jsx}",
  ],
  // plugins: [animate, typography],
};
