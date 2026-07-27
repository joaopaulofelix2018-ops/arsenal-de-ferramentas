import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { black: "#0B0B0B", yellow: "#FFC107", white: "#FFFFFF" } },
      boxShadow: { glow: "0 0 40px rgba(255,193,7,.18)" }
    }
  },
  plugins: []
};
export default config;
