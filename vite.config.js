import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#000000",
      },
      fontFamily: {
        code: ["Inter", "sans-serif"],
      },
    }
  }
})
