import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Base path pour GitHub Pages : https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Racine pour madebygass.github.io ; utilise "/repo-name/" si autre dépôt
  base: "/",
});
