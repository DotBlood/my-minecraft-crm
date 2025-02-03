import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: {
    pages: "./src/pages",
    layouts: "./src/app/layouts",
    assets: "./src/shared/assets",
    public: "./src/shared/public",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', "@nuxt/image", '@nuxt/icon', '@nuxt/fonts'],
  pinia: {
    storesDirs: ['./stores/**'],
  },

  vite: {
    resolve: {
      alias: [
        { find: "@", replacement: resolve(__dirname, "src") },
        { find: "@/", replacement: resolve(__dirname, "src", "*") },
        { find: "@app", replacement: resolve(__dirname, "src", "app") },
        { find: "@app/", replacement: resolve(__dirname, "src", "app", "*") },
        { find: "@pages", replacement: resolve(__dirname, "src", "pages") },
        {
          find: "@pages/",
          replacement: resolve(__dirname, "src", "pages", "*"),
        },
        { find: "@widgets", replacement: resolve(__dirname, "src", "widgets") },
        {
          find: "@widgets/",
          replacement: resolve(__dirname, "src", "widgets", "*"),
        },
        { find: "@shared", replacement: resolve(__dirname, "src", "shared") },
        {
          find: "@shared/",
          replacement: resolve(__dirname, "src", "shared", "*"),
        },
        {
          find: "@features",
          replacement: resolve(__dirname, "src", "features"),
        },
        {
          find: "@features/",
          replacement: resolve(__dirname, "src", "features", "*"),
        },
        {
          find: "@entities",
          replacement: resolve(__dirname, "src", "entities"),
        },
        {
          find: "@entities/",
          replacement: resolve(__dirname, "src", "entities", "*"),
        },
      ],
    },
    plugins: [tailwindcss()],
  },
  css: ["./src/shared/assets/main.css"],
});