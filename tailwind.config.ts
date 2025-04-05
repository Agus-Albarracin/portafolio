import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(170, 65, 0);",
        primaryDark: "rgb(255, 98, 0);",
        secondary: "# ",
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg,rgba(255, 255, 255, 0) 0%,rgba(230, 229, 229, 0.73) 0%, rgba(255, 255, 255, 0) 65.5%)",
        blueRadial:
          "linear-gradient(90deg, #007acc 0%, rgb(255, 255, 255, 0.6) 95.83%)",
        blueLight:
          "linear-gradient(90deg,rgb(38, 0, 255) 0%, #007acc 95.83% )",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(0, 51, 255, 0.23)",
      },
    },
  },
  plugins: [],
};
export default config;
