import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
