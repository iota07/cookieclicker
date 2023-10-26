import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/cookieclicker/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/src/scss/styles.scss';`,
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./src/main.js"),
        index: path.resolve(__dirname, "./src/index.html"),
      },
    },
    emptyOutDir: true,
  },
});
