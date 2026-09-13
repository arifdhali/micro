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
    port: 5002,
    strictPort: true,
    cors: true,
  },

  preview: {
    host: true,
    port: 5002,
    strictPort: true,
    cors: true,
  },

  build: {
    target: "esnext",
  },
})
