import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@plugins": fileURLToPath(new URL("./src/plugins", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
    },
  },
  // 如果使用 Bootstrap Vue Next
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`,
      },
    },
  },
  optimizeDeps: {
    include: ["bootstrap", "bootstrap-vue-next"],
  },
  // 如果遇到模組載入問題
  server: {
    optimizeDeps: {
      force: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shopee_web/'
    : '/'
});
