import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Base path for GitHub Pages
  // Use the name of your GitHub repository if it's not at the root
  // For example: '/portfolio-website/' if your repo name is 'portfolio-website'
  base: "./",
});
