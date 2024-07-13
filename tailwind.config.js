/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#1E3A8A",
        page: "#F3F4F6",
        card: "#FFFFFF",
        "card-hover": "#93C5FD",
        "default-text": "#111827",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
        warning: "#F97316",
        icon: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
