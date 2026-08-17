import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { federation } from "@module-federation/vite";
import mfConfig from "./module-federation.config.ts";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation(mfConfig),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src")
    }
  },
  server: {
    port: 5001,
    strictPort: true,
    cors: true,
   },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true,
  },
  build: {
    target: "esnext"
  }
})
