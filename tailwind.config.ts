import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-1": "#000",
      "blue-1": "#203271",
      "blue-2": "#101C45",
      "light-1": "#fff",
    },
  },
  plugins: [],
};
export default config;
