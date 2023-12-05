/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "neutral-300": "#d4d4d4",
        "grey-900": "#19191a",
        "grey-50": "rgba(229, 229, 230, 0.5)",
        "grey-800": "#313234",
        "blue-blue": "#0071e3",
        "text-5-": "#1d2129",
        "grey-400": "#96979a",
        "background-f2f2f2": "#f2f2f2",
        "grey-300": "#b0b1b3",
        "grey-100": "#e5e5e6",
        "grey-200": "#cacbcd",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "body-light": "Inter",
      },
      borderRadius: {
        "4xs-4": "8.4px",
        "7xs-6": "5.6px",
        "10xs-8": "2.8px",
        "8xs-2": "4.2px",
      },
    },
    fontSize: {
      base: "16px",
      "3xs-1": "9.1px",
      smi: "13px",
      sm: "14px",
      "xs-2": "11.2px",
      "12xl": "31px",
      "6xl": "25px",
      "20xl": "39px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
