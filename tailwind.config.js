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
        "our-products": "url('/our-products.jpg')",
        contact: "url('/contact.svg')",
      },
      colors: { primary: "#7c3aed" },
    },
  },
  plugins: [],
};
