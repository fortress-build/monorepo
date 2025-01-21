import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  plugins: [animate, typography],
};
