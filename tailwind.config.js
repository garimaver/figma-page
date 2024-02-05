// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         whitesmoke: "#f8fafc",
//         "colors-base-primary-foreground": "#fff",
//         "secondary-light-shade-shade-8": "#3d555e",
//         "secondary-light-shade-shade-4": "#5e7b87",
//         black: "#000",
//         "secondary-light-shade-shade-10": "#2c424a",
//         seconday: "#192a31",
//         gray: "rgba(0, 0, 0, 0.1)",
//         primary: "#ff003d",
//         "colors-base-success": "#17c964",
//         "secondary-light-shade-shade-6": "#4e6872",
//       },
//       spacing: {},
//       fontFamily: {
//         "heading-1-medium": "Poppins",
//         "text-base-leading-6-font-medium": "Inter",
//       },
//       borderRadius: {
//         "base-1": "16.1px",
//         "8xs": "5px",
//       },
//     },
//     fontSize: {
//       base: "16px",
//       lg: "18px",
//       "5xl": "24px",
//       lgi: "19px",
//       sm: "14px",
//       "19xl-5": "38.5px",
//       inherit: "inherit",
//     },
//     screens: {
//       mq1350: {
//         raw: "screen and (max-width: 1350px)",
//       },
//       mq800: {
//         raw: "screen and (max-width: 800px)",
//       },
//       mq450: {
//         raw: "screen and (max-width: 450px)",
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
