import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { federation } from "@module-federation/vite";
import mfConfig from "./module-federation.config.ts";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation(mfConfig),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src")
    }
  },
  server: {
    host: true,
    port: 5000,
    strictPort: true,
    cors: true,
  },

  preview: {
    port: 5000,
    strictPort: true,
    cors: true,
  },
})
